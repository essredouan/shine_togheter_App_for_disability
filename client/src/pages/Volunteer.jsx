import { useState } from 'react';
import API from '../services/api';
import './Volunteer.css';

export default function Volunteer() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    supportType: 'money', // money, clothes, materials, visit
    message: '',
  });

  const [responseMsg, setResponseMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setResponseMsg('');
    setErrorMsg('');

    try {
      await API.post('/volunteer/request', form);
      setResponseMsg('Your request has been sent successfully!');
      setForm({
        name: '',
        email: '',
        supportType: 'money',
        message: '',
      });
    } catch (err) {
      setErrorMsg('Failed to send request. Please try again later.');
    }
  };

  return (
    <div className="volunteer-container">
      <h2>Volunteer </h2>

      {responseMsg && <p className="volunteer-message success">{responseMsg}</p>}
      {errorMsg && <p className="volunteer-message error">{errorMsg}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={form.email}
          onChange={handleChange}
          required
        />
<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={form.phone || ''}
  onChange={handleChange}
  required
  pattern="^\+?\d{10,15}$"
  title="Enter a valid phone number"
/>

        <label htmlFor="supportType">Select support type:</label>
        <select
          name="supportType"
          id="supportType"
          value={form.supportType}
          onChange={handleChange}
          required
        >
          <option value="money">Financial Support</option>
          <option value="clothes">Clothes Donation</option>
          <option value="materials">Materials for Disabilities</option>
          <option value="visit">Visit Organizations</option>
        </select>

        <textarea
          name="message"
          placeholder="Additional details or message..."
          value={form.message}
          onChange={handleChange}
          rows={4}
        />

        <button type="submit">Send </button>
      </form>
    </div>
  );
}
