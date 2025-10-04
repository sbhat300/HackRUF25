from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from Logger.logger import get_logger
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
logger = get_logger()

origins = [
    'http://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type"]
)

@app.middleware("http")
def log_request(request: Request, next):
    '''Log details of the incoming request'''
    logger.info(f'Incoming request for path: {request.url.path}')

    response = next(request)
    
    return response

@app.get('/')
def root():
    return {'message': 'Server is running'}
