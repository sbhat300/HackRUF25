from fastapi import APIRouter, UploadFile, File, HTTPException, Query, Request, Form
import shutil
import os
from audio_utils.audio_utils import create_transcript, query_gemini, text_to_speech
from fastapi.responses import StreamingResponse
from io import BytesIO
from Logger.logger import get_logger
from PydanticClasses.audio_utils_classes import TranscribeResponse, QueryResponse, GenerateGeminiSchema, GenerateGeminiVoiceSchema
from PydanticClasses.mongo_db_classes import Message
import db_utils.db_utils as db_utils
import json

logger = get_logger()

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/transcribe/")
async def transcribe_audio(file: UploadFile = File(...)) -> TranscribeResponse:
    '''
    Audio file to text
    '''
    logger.info(f'Transcribing audio file {file.filename}')
    
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        transcript = create_transcript(file_path)
        os.remove(file_path) 
        return {"transcript": transcript.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.post("/audio/query/")
async def audio_query(prompt: str) -> QueryResponse:
    '''
    Get enhanced response
    '''
    logger.info(f'Enhancing response for:\n{prompt}')
    result = query_gemini(prompt)
    return {'result': result}  

@router.get("/tts/")
async def generate_speech(prompt: str) -> StreamingResponse:
    '''
    TTS for the generated audio
    '''
    logger.info(f'Generating TTS for:\n{prompt}')
    audio_stream = text_to_speech(prompt)  
    return StreamingResponse(
        audio_stream,
        media_type="audio/mpeg",
        headers={"Content-Disposition": "inline; filename=response.mp3"},
    )

@router.post("/generate_from_gemini/")
async def generate_from_gemini(data: GenerateGeminiSchema, request: Request) -> StreamingResponse:
    '''
    Runs full pipeline for text to enhance to speech
    '''
    session = request.session['session_id']
    data_dict = data.model_dump()
    logger.info(f'Enhancing text for:\n{data_dict["prompt"]}')
    result = db_utils.update_conversation_util(data_dict['conversation_id'], Message(role='user', message=data_dict['prompt'], timestamp=None), session)
    if result.matched_count == 0:
        logger.warning(f'Conversation with uuid {data_dict["conversation_id"]} not found')
        raise HTTPException(status_code=404, detail='Conversation not found')
    if result.modified_count == 0:
        logger.warning(f'Conversation with uuid {data_dict["conversation_id"]} was matched but not modified')
        
    enhanced_text = query_gemini(data_dict['prompt'])
    result = db_utils.update_conversation_util(data_dict['conversation_id'], Message(role='model', message=enhanced_text, timestamp=None), session)
    if result.matched_count == 0:
        logger.warning(f'Conversation with uuid {data_dict["conversation_id"]} not found')
        raise HTTPException(status_code=404, detail='Conversation not found')
    if result.modified_count == 0:
        logger.warning(f'Conversation with uuid {data_dict["conversation_id"]} was matched but not modified')
        
    logger.info(f'Generating TTS for {enhanced_text}')
    audio_stream = text_to_speech(enhanced_text)
    json_metadata = {
        'enhanced_text': enhanced_text
    }
    logger.info('Streaming response')
    return StreamingResponse(
        audio_stream,
        media_type="audio/mpeg",
        headers={"Content-Disposition": "inline; filename=response.mp3",
                 "X-Initial-Metadata": json.dumps(json_metadata)}
    )

@router.post('/generate-from-gemini-voice/')
async def generate_from_gemini_voice(request:Request, data:str=Form(), file: UploadFile=File()) -> StreamingResponse:
    '''
    Generates from gemini with voice data
    '''
    session = request.session['session_id']
    
    logger.info('Generating response from voice')
    try:
        data_dict = json.loads(data) 
        
    except json.JSONDecodeError:
        raise HTTPException(status_code=422, detail='Invalid json')
    
    logger.info(f'Getting transcription for file {file.filename}')
    transcription = (await transcribe_audio(file))['transcript']
    
    result = db_utils.update_conversation_util(data_dict['conversation_id'], Message(role='user', message=transcription, timestamp=None), session)
    if result.matched_count == 0:
        logger.warning(f'Conversation with uuid {data_dict["conversation_id"]} not found')
        raise HTTPException(status_code=404, detail='Conversation not found')
    if result.modified_count == 0:
        logger.warning(f'Conversation with uuid {data_dict["conversation_id"]} was matched but not modified')
        
    enhanced_text = query_gemini(transcription)
    result = db_utils.update_conversation_util(data_dict['conversation_id'], Message(role='model', message=enhanced_text, timestamp=None), session)
    if result.matched_count == 0:
        logger.warning(f'Conversation with uuid {data_dict["conversation_id"]} not found')
        raise HTTPException(status_code=404, detail='Conversation not found')
    if result.modified_count == 0:
        logger.warning(f'Conversation with uuid {data_dict["conversation_id"]} was matched but not modified')
        
    logger.info(f'Generating TTS for {enhanced_text}')
    audio_stream = text_to_speech(enhanced_text)
    
    json_metadata = {
        'enhanced_text': enhanced_text
    }
    logger.info('Streaming response')
    return StreamingResponse(
        audio_stream,
        media_type="audio/mpeg",
        headers={"Content-Disposition": "inline; filename=response.mp3",
                 "X-Initial-Metadata": json.dumps(json_metadata)}
    )