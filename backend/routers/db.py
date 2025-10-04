from fastapi import APIRouter, status, Request
from PydanticClasses.mongo_db_classes import HealthResponse
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

@router.post('/create-conversation')
async def create_conversation(request: Request):
    session = request.session['session_id']