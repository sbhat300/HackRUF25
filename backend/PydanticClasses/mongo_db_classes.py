from pydantic import BaseModel, Field
from typing import Literal, List

class HealthResponse(BaseModel):
    status: str

class GetConversationSchema(BaseModel):
    session_cookie: str = ''
    
class CreateConversationResponse(BaseModel):
    conversation_id: str
    message: str
    
class Message(BaseModel):
    role: Literal['user', 'model']
    message: str
    timestamp: float | None = None
    
class Conversation(BaseModel):
    conversation_uuid: str
    title: str
    
class GetConversationResponse(BaseModel):
    conversation_id: str
    title: str
    time: str
    time: float
    messages: List[Message] = Field(default_factory=list)

class UpdateConversationResponse(BaseModel):
    conversation_id: str
    message: str
    
class GetConversationsResponse(BaseModel):
    conversations: List[Conversation] = Field(default_factory=list)