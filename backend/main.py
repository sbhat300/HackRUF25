from fastapi import FastAPI, Request 
from fastapi.middleware.cors import CORSMiddleware
from routers import db, audio_utils, session
from Logger.logger import get_logger
from dotenv import load_dotenv
from starlette.middleware.sessions import SessionMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
import uuid
import os

load_dotenv()

SESSION_SECRET_KEY = os.getenv("SESSION_SECRET_KEY")

app = FastAPI()
logger = get_logger()

origins = [
    'http://localhost:5173',
]

app.include_router(
    db.router,
    prefix='/db',
    tags=['db'])

app.include_router(
    audio_utils.router,
    prefix='/audio',
    tags=['audio']
)

app.include_router(
    session.router,
    prefix='/session',
    tags=['session']
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"]
)

class EnsureSessionID(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        if not request.session or 'session_id' not in request.session:
            request.session["session_id"] = str(uuid.uuid4())
            logger.info(f"New session created: {request.session['session_id']}")
        
        response = await call_next(request)

        return response
app.add_middleware(EnsureSessionID)

app.add_middleware(
    SessionMiddleware,
    secret_key=SESSION_SECRET_KEY,
    max_age=86400
)

@app.middleware("http")
def log_request(request: Request, next):
    '''Log details of the incoming request'''
    logger.info(f'Incoming request for path: {request.url.path}')

    response = next(request)
    
    return response

@app.get('/')
def root():
    '''Health check'''
    return {'message': 'Server is running'}
