import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // نستعمل نفس CSS ديال Login

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'disabled', // القيمة الافتراضية
  });

  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/users/register', form);
      localStorage.setItem('token', res.data.token);
      navigate('/Login');
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={form.username}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            required
          />
          <select name="role" onChange={handleChange} value={form.role}>
            <option value="disabled">Disabled</option>
                      <option value="organization">Organization</option>
            <option value="volunteer">Volunteer</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
