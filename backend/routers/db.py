from fastapi import APIRouter, status, Request, HTTPException
from PydanticClasses.mongo_db_classes import HealthResponse, CreateConversationResponse, GetConversationResponse
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
async def create_conversation(request: Request) ->CreateConversationResponse:
    session = request.session['session_id']
    logger.info(f'Create conversation called with session id {session}')
    
    conversation_uuid = uuid.uuid4()
    new_conversation = database.conversations.insert_one({
        'conversation_id': str(conversation_uuid), 
        'title': f'Conversation {conversation_uuid}', 
        'time': float(time.time()),
        'messages': []
    })
    
    logger.info(f'Created conversation with id: {new_conversation}')
    
    return {'conversation_id': str(conversation_uuid), 'message': 'success'}

@router.get('/get-conversation/{conversation_id}')
async def get_conversation(conversation_id: str, request: Request) -> GetConversationResponse:
    logger.info(f'Getting conversation with uuid {conversation_id}')
    conversation = database.conversations.find_one({'conversation_id': conversation_id})
    
    if conversation is None:
        logger.warning(f'conversation with uuid {conversation_id} not found')
        raise HTTPException(status_code=404, detail='Conversation not found')
    
    del conversation['_id']   
    return conversation 