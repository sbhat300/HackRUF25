from fastapi import APIRouter, UploadFile, File, HTTPException, Query
import shutil
import os
from audio_utils.audio_utils import create_transcript, query_gemini, text_to_speech, audio_pipeline
from fastapi.responses import StreamingResponse
from io import BytesIO
from Logger.logger import get_logger
from PydanticClasses.audio_utils_classes import TranscribeResponse, QueryResponse

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
        return {"transcript": transcript}
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

@router.get("/generate_from_gemini/")
async def generate_from_gemini(prompt: str = Query(..., description="Text to enhance and convert to speech")) -> StreamingResponse:
    '''
    Runs full pipeline for text to enhance to speech
    '''
    
    logger.info(f'Enhancing text for:\n{prompt}')
    enhanced_text = query_gemini(prompt)
    logger.info(f'Generating TTS for {enhanced_text}')
    audio_stream = text_to_speech(enhanced_text)
    logger.info('Streaming response')
    return StreamingResponse(
        audio_stream,
        media_type="audio/mpeg",
        headers={"Content-Disposition": "inline; filename=response.mp3"},
    )
