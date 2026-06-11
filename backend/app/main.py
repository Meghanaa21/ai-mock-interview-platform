from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create the FastAPI app instance
app = FastAPI(
    title="AI Mock Interview Platform API",
    description="Backend API for AI-powered mock interviews",
    version="1.0.0"
)

# CORS middleware — allows our React frontend to talk to this backend
# Without this, the browser will block all requests from React to FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Root endpoint — just to test the API is running
@app.get("/")
def root():
    return {
        "message": "AI Mock Interview Platform API is running!",
        "version": "1.0.0"
    }

# Health check endpoint — used by deployment platforms to verify app is alive
@app.get("/health")
def health_check():
    return {"status": "healthy"}