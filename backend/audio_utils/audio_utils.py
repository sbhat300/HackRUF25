import os
import requests
import google.generativeai as genai
#from google.genai import types
import tempfile
import uuid
from dotenv import load_dotenv
from elevenlabs import VoiceSettings
from elevenlabs.client import ElevenLabs
import io
from io import BytesIO

load_dotenv()

elevenlabs = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)

def create_transcript(audio_path: str) -> str:
    with open(audio_path, "rb") as audio_file:
        audio_data = BytesIO(audio_file.read())
    
    transcription = elevenlabs.speech_to_text.convert(
        file=audio_data,
        model_id="scribe_v1", 
        tag_audio_events=True, 
        language_code="eng",
        diarize=True, 
    )
    
    return transcription

def query_gemini(transcript: str) -> str:
    model = genai.GenerativeModel("gemini-2.5-flash")

    system_instruction = (
        "You are a speech transcription enhancer. "
        "The input below is raw speech text from a user. "
        "Correct grammar, improve coherence, fix any unclear phrasing, "
        "and keep the meaning intact. "
        "Return the cleaned text without additional explanation."
    )

    prompt = f"{system_instruction}\n\nUser transcript:\n{transcript}"

    response = model.generate_content(prompt)

    if not response.candidates or not response.text:
        return 'ERROR GENERATING RESPONSE'

    return response.text.strip() if response.text else ""

def generate_title(initial_prompt: str) -> str:
    model = genai.GenerativeModel("gemini-2.5-flash")

    system_instruction = (
        "You are a speech transcription enhancer. You are about to analyze a conversation."
        "Generate a short and title based off of the user's first message on what the conversation may be about."
        "Return the cleaned text without additional explanation"
    )
    
    prompt = f"{system_instruction}\n\Initial user prompt:\n{initial_prompt}"
    
    response = model.generate_content(prompt)
    
    if not response.candidates or not response.text:
        return 'ERROR GENERATING RESPONSE'

    return response.text.strip() if response.text else ""
    

def text_to_speech(text: str):
    response = elevenlabs.text_to_speech.stream(
        voice_id="OYTbf65OHHFELVut7v2H", 
        output_format="mp3_22050_32",
        text=text,
        model_id="eleven_multilingual_v2",

        voice_settings=VoiceSettings(
            stability=0.50,
            similarity_boost=0.7,
            style=0.0,
            use_speaker_boost=True,
            speed=0.7,
        ),
    )
    
    for chunk in response:
        if chunk:
            yield chunk