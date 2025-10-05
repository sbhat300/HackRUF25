from pydantic import BaseModel, Field
from typing import Literal, List

class TranscribeResponse(BaseModel):
    transcript: str
    
class QueryResponse(BaseModel):
    result: str