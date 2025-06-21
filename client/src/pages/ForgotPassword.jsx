import { useState } from 'react';
import API from '../services/api';
import './ForgotPassword.css';


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await API.post('/users/forgot-password', { email });
      setMessage(res.data.msg || 'Reset link has been sent to your email.');
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong.');
    }
  };

  return (
    <div>
      <div className="forgot-container">
  <h2>Forgot Password</h2>

  {message && <p className="forgot-message">{message}</p>}
  {error && <p className="forgot-error">{error}</p>}

  <form onSubmit={handleSubmit}>
    <input
      type="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      required
      placeholder="Enter your email"
    />
    <button type="submit">Send Reset Link</button>
  </form>
</div>

      {message && <p>{message}</p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
{/* <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Enter your email" */}
        {/* /> */}
        {/* <button type="submit">Send Reset Link</button> */}
      </form>
    </div>
  );
}
