// components/admin/AddEvent.jsx
import { useState } from 'react';
import API from '../../services/api';

export default function AddEvent() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await API.post('/events/add', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Event added successfully');
      setForm({ title: '', description: '', date: '', location: '' });
    } catch (err) {
      alert(err.response?.data?.msg || 'Error creating event');
    }
  };

  return (
    <div className="login-box">
      <h2>Add Event (Admin Only)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={form.location}
          onChange={handleChange}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
