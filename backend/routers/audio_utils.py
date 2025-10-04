from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
import shutil
import os
# from audio_utils.audio_utils import create_transcript, query_gemini, text_to_speech

router = APIRouter()

# UPLOAD_FOLDER = "uploads"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# @router.post("/transcribe/")
# async def transcribe_audio(file: UploadFile = File(...)):
#     file_path = os.path.join(UPLOAD_FOLDER, file.filename)
#     try:
#         with open(file_path, "wb") as buffer:
#             shutil.copyfileobj(file.file, buffer)
#         transcript = create_transcript(file_path)
#         return {"transcript": transcript}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
    
# @router.post("/query/")
# async def query_text(prompt: str):
#     try:
#         response_text = query_gemini(prompt)
#         return {"response": response_text}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# @router.post("/tts/")
# async def generate_speech(prompt: str):
#     audio_path = text_to_speech(prompt)
#     return FileResponse(audio_path, media_type="audio/mpeg", filename="response.mp3")


