import { Link, useNavigate } from 'react-router-dom'

function Navbar({ isLoggedIn }) {
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-700 bg-gray-900">
      
      {/* Logo — clicking it goes to home */}
      <Link to="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition">
        InterviewAI
      </Link>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-gray-300 hover:text-white transition">
              Dashboard
            </Link>
            <button
              onClick={() => navigate('/login')}
              className="text-gray-300 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-300 hover:text-white transition">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-white"
            >
              Get Started
            </Link>
          </>
        )}
      </div>

    </nav>
  )
}

export default Navbar