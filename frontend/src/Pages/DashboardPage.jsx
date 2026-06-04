function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-blue-400">InterviewAI</h1>
        <button className="text-gray-300 hover:text-white transition">
          Logout
        </button>
      </nav>

      <div className="px-8 py-10">
        <h2 className="text-3xl font-bold mb-2">Welcome back! 👋</h2>
        <p className="text-gray-400 mb-10">Ready for your next practice session?</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl">
            <p className="text-gray-400 text-sm">Total Interviews</p>
            <p className="text-4xl font-bold mt-2">0</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl">
            <p className="text-gray-400 text-sm">Average Score</p>
            <p className="text-4xl font-bold mt-2">—</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl">
            <p className="text-gray-400 text-sm">Hours Practiced</p>
            <p className="text-4xl font-bold mt-2">0</p>
          </div>
        </div>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
          Start New Interview
        </button>
      </div>
    </div>
  )
}

export default DashboardPage