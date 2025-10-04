from fastapi import APIRouter, status, Request
from PydanticClasses.session_classes import SessionClearResponse

router = APIRouter()

@router.post('/clear', tags=['session'])
async def clear(request: Request) -> SessionClearResponse:
    '''Clears data from user session'''
    request.session.clear()
    return {'message': 'cleared session cookies'}