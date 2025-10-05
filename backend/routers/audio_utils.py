from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
import shutil
import os
from audio_utils.audio_utils import create_transcript, query_gemini, text_to_speech
from fastapi.responses import StreamingResponse
from io import BytesIO

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/transcribe/")
async def transcribe_audio(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        transcript = create_transcript(file_path)
        return {"transcript": transcript}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.post("/audio/query/")
async def audio_query(prompt: str):
    result = query_gemini(prompt)
    return result  

@router.post("/tts/")
async def generate_speech(prompt: str):
    audio_stream = text_to_speech(prompt)  
    return StreamingResponse(
        audio_stream,
        media_type="audio/mpeg",
        headers={"Content-Disposition": "inline; filename=response.mp3"},
    )


