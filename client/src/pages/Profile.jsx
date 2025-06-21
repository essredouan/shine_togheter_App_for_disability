import { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/users/me');
        setUser(res.data);
      } catch (err) {
        navigate('/login');
      }
    };
    fetchProfile();
  }, [navigate]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4">👤 User Profile</h2>
      {user ? (
        <div className="space-y-2">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <button onClick={logout} className="mt-4 bg-red-600 text-white px-4 py-2">Logout</button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
