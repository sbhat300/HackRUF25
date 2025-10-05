import uuid
from Logger.logger import get_logger
from MongoDBClient.mongodb import get_database
from PydanticClasses.mongo_db_classes import Message
import time

database = get_database()
logger = get_logger()

def create_conversation_util(session: str):
    logger.info(f'Create conversation called with session id {session}')
    conversation_uuid = str(uuid.uuid4())
    new_conversation = database.conversations.insert_one({
        'conversation_id': conversation_uuid, 
        'title': f'Conversation {conversation_uuid}', 
        'time': float(time.time()),
        'messages': []
    })
    
    logger.info(f'Created conversation with id: {new_conversation.inserted_id}')
    
    # Update the sessions table with the new conversation
    update_operation = {
        '$push': {
            'conversations': {
                'conversation_uuid': conversation_uuid,
                'title': f'Conversation {conversation_uuid}'
            }
        },
        '$setOnInsert': {
            'session_cookie': session
        }
    }
    logger.info(f'Performing upsert operation for session id {session} and conversation {conversation_uuid}')
    result = database.sessions.update_one(
        {'session_cookie': session},
        update_operation,
        upsert=True 
    )
    if result.upserted_id is None:
        logger.info(f'Session {session} found, updated with conversation {conversation_uuid}')
    else:
        logger.info(f'Session not found, created new session with token {session} and added conversation {conversation_uuid}')
        
    return conversation_uuid

def get_conversation_util(conversation_id: str):
    logger.info(f'Getting conversation with uuid {conversation_id}')
    conversation = database.conversations.find_one({'conversation_id': conversation_id})
    
    return conversation

def update_conversation_util(conversation_id: str, message: Message):
    logger.info(f'Updating conversation with uuid {conversation_id}')
    
    message_dict = message.model_dump()
    message_dict['timestamp'] = float(time.time())
    update_result = database.conversations.update_one(
        {'conversation_id': conversation_id}, 
        {'$push': {'messages': message_dict}}
    )
    
    return update_result

def get_conversations_util(session: str):
    return database.sessions.find_one({'session_cookie': session}, {'conversations': 1})

def set_title(conversation_id: str, session_cookie: str, title: str):
    '''
    Set the title of a conversation in the session and conversation
    '''
    database.conversations.update_one({'conversation_id': conversation_id}, {'$set': {'title': title}})
    
    database.sessions.update_one({
        'session_cookie': session_cookie,
        'conversations.conversation_uuid': conversation_id
    }, {
        '$set': {'conversations.$.title': title}
    })