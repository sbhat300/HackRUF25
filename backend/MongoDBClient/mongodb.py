import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

class Mongo:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Mongo, cls).__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if self._initialized:
            return
        self.client = MongoClient('localhost', int(os.getenv('MONGODB_PORT')))
        self.db = self.client['hackruf25']
        self.sessions = self.db['sessions']
        self.conversations = self.db['conversations']
        
        self._initialized = True