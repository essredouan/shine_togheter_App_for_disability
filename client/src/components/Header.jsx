import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-blue-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">🧩 Jadara</Link>

        <nav className="space-x-4">
          {!token ? (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="hover:underline">Profile</Link>
              <button onClick={handleLogout} className="ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
