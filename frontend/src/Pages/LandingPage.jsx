function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-blue-400">
          InterviewAI
        </h1>
        <div className="flex gap-4">
          <a href="/login" className="text-gray-300 hover:text-white transition">
            Login
          </a>
          <a href="/signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-24">
        <h2 className="text-5xl font-bold mb-6">
          Ace Your Next Interview
          <span className="text-blue-400"> with AI</span>
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mb-8">
          Practice with AI-powered mock interviews, get instant feedback, 
          and track your progress to land your dream job.
        </p>
        <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl transition">
          Start Practicing Free
        </a>
      </div>

    </div>
  )
}

export default LandingPage