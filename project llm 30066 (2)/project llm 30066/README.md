# AI Twitter Analytics (React + Tailwind + Python NLP)

This project was migrated from Streamlit to a modern split architecture:

- Frontend: React + Vite + Tailwind CSS
- Backend: FastAPI (Python)
- NLP: Real tweet text sentiment + keyword extraction
- AI Agent: Groq LLM insights from analyzed Twitter URLs

## Project Structure

- backend/main.py: FastAPI app with analytics and agent APIs
- backend/services/nlp_engine.py: NLP and summary logic
- backend/requirements.txt: Python dependencies
- frontend/: React + Tailwind app
- .env: Set Groq API key for agent responses

## Run Backend

1. Open terminal in project root.
2. Install backend deps:
   - pip install -r backend/requirements.txt
3. Set Groq API key (PowerShell):
   - $env:GROQ_API_KEY="your_groq_key_here"
3. Run API:
   - uvicorn backend.main:app --reload --port 8000

## Run Frontend

1. Open new terminal.
2. Go to frontend folder:
   - cd frontend
3. Install packages:
   - npm install
4. Start UI:
   - npm run dev

Frontend runs on http://127.0.0.1:5173
Backend runs on http://127.0.0.1:8000

## API Endpoints

- GET /api/health
- POST /api/analyze
- POST /api/agent

## Analyze Request Modes

- mode="url": Analyze one or more Twitter/X status links
- mode="text": Analyze direct text input
