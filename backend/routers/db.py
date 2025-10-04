from fastapi import APIRouter
from PydanticClasses.mongo_db_classes import HealthResponse

router = APIRouter()

@router.get('/', tags=['db'])
async def get_status() -> HealthResponse:
    '''
    Status check for the database route
    '''
    return {'status': 'healthy'} 