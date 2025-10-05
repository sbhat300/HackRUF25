from fastapi import APIRouter, status, Request, HTTPException
from PydanticClasses.mongo_db_classes import (
    HealthResponse, 
    CreateConversationResponse, 
    GetConversationResponse, 
    Message, 
    UpdateConversationResponse,
    GetConversationsResponse
)
import db_utils.db_utils as db_utils
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
    conversation_uuid = db_utils.create_conversation_util(session)
    return {'conversation_id': str(conversation_uuid), 'message': 'success'}

@router.get('/get-conversation/{conversation_id}', tags=['db'])
async def get_conversation(conversation_id: str, request: Request) -> GetConversationResponse:
    '''
    Get a full conversation with a given id
    '''
    conversation = db_utils.get_conversation_util(conversation_id)
    
    if conversation is None:
        logger.warning(f'conversation with uuid {conversation_id} not found')
        raise HTTPException(status_code=404, detail='Conversation not found')
   
    if 'timestamp' not in conversation:
        conversation['timestamp'] = 0.0
        
    del conversation['_id']   
    return conversation 

@router.post('/update-conversation/{conversation_id}', tags=['db'])
async def update_conversation(conversation_id: str, request: Request, message: Message) -> UpdateConversationResponse:
    '''
    Add a new message to a conversation with a certain id
    '''
    session = request.session['session_id']
    update_result = db_utils.update_conversation_util(conversation_id, message, session)
    
    if update_result.matched_count == 0:
        logger.warning(f'Conversation with uuid {conversation_id} not found')
        raise HTTPException(status_code=404, detail='Conversation not found')
    if update_result.modified_count == 0:
        logger.warning(f'Conversation with uuid {conversation_id} was matched but not modified')
        
    return {'conversation_id': conversation_id, 'message': 'conversation updated'}

@router.get('/get-conversations', tags=['db'])
async def get_conversations(request: Request) -> GetConversationsResponse:
    session = request.session['session_id']
    
    conversations = db_utils.get_conversations_util(session)
    
    if conversations is None:
        logger.warning(f'Session with cookie {session} not found')
        raise HTTPException(status_code=404, detail='Session not found')
    
    return conversations