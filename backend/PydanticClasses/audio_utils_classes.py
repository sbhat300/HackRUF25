from pydantic import BaseModel, Field
from typing import Literal, List
from fastapi import UploadFile

class TranscribeResponse(BaseModel):
    transcript: str
    
class QueryResponse(BaseModel):
    result: str
    
class GenerateGeminiSchema(BaseModel):
    prompt: str
    conversation_id: str

class GenerateGeminiVoiceSchema(BaseModel):
    conversation_id: str

class PipelineResponse(BaseModel):
    enhanced_text: str