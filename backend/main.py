from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from Logger.logger import get_logger
import os
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText

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

@app.get('/')
def root():
    logger.info('root endpoint called')
    return {'message': 'Server is running'}
