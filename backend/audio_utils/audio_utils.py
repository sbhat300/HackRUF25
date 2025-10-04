import os
import requests
import google.generativeai as genai
import tempfile
from dotenv import load_dotenv

load_dotenv()

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)

def create_transcript(audio_path: str) -> str:
    url = "https://api.elevenlabs.io/v1/speech-to-text"
    headers = {"xi-api-key": ELEVENLABS_API_KEY}
    
    with open(audio_path, "rb") as f:
        files = {"file": (os.path.basename(audio_path), f, "audio/mpeg")}
        response = requests.post(url, headers=headers, files=files)
    
    response.raise_for_status()
    data = response.json()
    return data["text"]

def query_gemini(prompt: str) -> str:
    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)
    return response.text

def text_to_speech(text: str) -> str:
    url = "https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB"
    headers = {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
    }
    data = {"text": text, "model_id": "eleven_multilingual_v2"}
    
    r = requests.post(url, headers=headers, json=data)
    r.raise_for_status()

    temp_audio = tempfile.NamedTemporaryFile(suffix=".mp3", delete=False)
    with open(temp_audio.name, "wb") as f:
        f.write(r.content)
    
    return temp_audio.name
