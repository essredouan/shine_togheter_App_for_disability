import { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get('/users/me');
        setUser(res.data);
      } catch (err) {
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="bg-white shadow-md rounded-xl p-4 flex justify-center gap-8 mb-10 items-center">
        <Link to="/about" className="text-blue-700 font-semibold hover:text-blue-900 transition">About</Link>
        <Link to="/support" className="text-blue-700 font-semibold hover:text-blue-900 transition">Support</Link>
        <Link to="/event" className="text-blue-700 font-semibold hover:text-blue-900 transition">Event</Link>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="ml-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </nav>

      <div className="max-w-6xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">🌟 Welcome to Your Dashboard</h1>

        {user ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold text-gray-700">👤 Username</h2>
                <p className="mt-2 text-gray-600">{user.username}</p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold text-gray-700">📧 Email</h2>
                <p className="mt-2 text-gray-600">{user.email}</p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold text-gray-700">🛡️ Role</h2>
                <p className="mt-2 text-gray-600 capitalize">{user.role}</p>
              </div>

              {/* Extra Cards */}
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 col-span-1 md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-700">🎯 Status</h2>
                <p className="mt-2 text-gray-600">You're successfully logged in and ready to explore!</p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 p-4 rounded-xl shadow-md text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Disability Support Platform — All rights reserved.
      </footer>
    </div>
  );
}
