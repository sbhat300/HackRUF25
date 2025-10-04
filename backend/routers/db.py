from fastapi import APIRouter, status, Request, HTTPException
from PydanticClasses.mongo_db_classes import (
    HealthResponse, 
    CreateConversationResponse, 
    GetConversationResponse, 
    Message, 
    UpdateConversationResponse,
    GetConversationsResponse
)
import uuid
import time
from MongoDBClient.mongodb import get_database
from Logger.logger import get_logger

router = APIRouter()
database = get_database()
logger = get_logger()

@router.get('/', tags=['db'])
async def get_status() -> HealthResponse:
    '''
    Status check for the database route
    '''
    return {'status': 'healthy'} 

@router.post('/create-conversation', tags=['db'])
async def create_conversation(request: Request) -> CreateConversationResponse:
    '''
    Create a new conversation, get back the UUID, and update the session with the conversation
    '''
    session = request.session['session_id']
    logger.info(f'Create conversation called with session id {session}')
    
    conversation_uuid = str(uuid.uuid4())
    new_conversation = database.conversations.insert_one({
        'conversation_id': conversation_uuid, 
        'title': f'Conversation {conversation_uuid}', 
        'time': float(time.time()),
        'messages': []
    })
    
    logger.info(f'Created conversation with id: {new_conversation.inserted_id}')
    
    # Update the sessions table with the new conversation
    update_operation = {
        '$push': {
            'conversations': {
                'conversation_uuid': conversation_uuid,
                'title': f'Conversation {conversation_uuid}'
            }
        },
        '$setOnInsert': {
            'session_cookie': session
        }
    }
    logger.info(f'Performing upsert operation for session id {session} and conversation {conversation_uuid}')
    result = database.sessions.update_one(
        {'session_cookie': session},
        update_operation,
        upsert=True 
    )
    
    if result.upserted_id is None:
        logger.info(f'Session {session} found, updated with conversation {conversation_uuid}')
    else:
        logger.info(f'Session not found, created new session with token {session} and added conversation {conversation_uuid}')
    
    return {'conversation_id': str(conversation_uuid), 'message': 'success'}

@router.get('/get-conversation/{conversation_id}', tags=['db'])
async def get_conversation(conversation_id: str, request: Request) -> GetConversationResponse:
    '''
    Get a full conversation with a given id
    '''
    logger.info(f'Getting conversation with uuid {conversation_id}')
    conversation = database.conversations.find_one({'conversation_id': conversation_id})
    
    if conversation is None:
        logger.warning(f'conversation with uuid {conversation_id} not found')
        raise HTTPException(status_code=404, detail='Conversation not found')
    
    del conversation['_id']   
    return conversation 

@router.post('/update-conversation/{conversation_id}', tags=['db'])
async def update_conversation(conversation_id: str, request: Request, message: Message) -> UpdateConversationResponse:
    '''
    Add a new message to a conversation with a certain id
    '''
    logger.info(f'Updating conversation with uuid {conversation_id}')
    
    message_dict = message.model_dump()
    update_result = database.conversations.update_one(
        {'conversation_id': conversation_id}, 
        {'$push': {'messages': message_dict}}
    )
    
    if update_result.matched_count == 0:
        logger.warning(f'Conversation with uuid {conversation_id} not found')
        raise HTTPException(status_code=404, detail='Conversation not found')
    if update_result.modified_count == 0:
        logger.warning(f'Conversation with uuid {conversation_id} was matched but not modified')
        
    return {'conversation_id': conversation_id, 'message': 'conversation updated'}

@router.get('/get-conversations', tags=['db'])
async def get_conversations(request: Request) -> GetConversationsResponse:
    session = request.session['session_id']
    
    conversations = database.sessions.find_one({'session_cookie': session}, {'conversations': 1})
    
    if conversations is None:
        logger.warning(f'Session with cookie {session} not found')
        raise HTTPException(status_code=404, detail='Session not found')
    
    return conversations