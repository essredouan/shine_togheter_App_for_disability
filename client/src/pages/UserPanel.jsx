import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function UserPanel() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get('/users/me');
        if (res.data.role !== 'disabled') {
          navigate('/login');
        } else {
          setUser(res.data);
        }
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

  if (!user) return <div className="text-center p-8 text-gray-600">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center px-8">
        <div className="text-2xl font-bold text-blue-700">♿ MyDisabilityApp</div>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/event" className="hover:text-blue-600">Event</Link></li>
          <li><Link to="/volunteer" className="hover:text-blue-600">Volunteer</Link></li>
          <li><Link to="/request" className="hover:text-blue-600">Request</Link></li>
          <li><Link to="/support" className="hover:text-blue-600">Support</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
          <li>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Welcome + Cards */}
      <div className="max-w-6xl mx-auto p-6 mt-8">
        <h1 className="text-3xl font-semibold text-blue-800 mb-6">Welcome, {user.username} 👋</h1>
        <p className="text-gray-700 mb-4">Access all your services below.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Events" desc="Browse and join accessible events" emoji="📅" />
          <Card title="Volunteers" desc="Meet available volunteers" emoji="🙋‍♂️" />
          <Card title="Request Help" desc="Submit a new support request" emoji="📝" />
          <Card title="Support" desc="Access help and contact us" emoji="💬" />
          <Card title="About Us" desc="Learn about our mission" emoji="ℹ️" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, desc, emoji }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{emoji} {title}</h2>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
