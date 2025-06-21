import { useState } from 'react';
import API from '../services/api';
import './Support.css';


export default function Support() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    supportType: 'financial', // 'financial' or 'material'
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // هنا نفترض أن السيرفر عندو endpoint خاص بالطلبات support
      await API.post('/support/request', form);
      setMessage('Your support request has been submitted successfully!');
      setForm({
        name: '',
        email: '',
        supportType: 'financial',
        description: '',
      });
    } catch (err) {
      setMessage('Failed to submit request. Please try again later.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Request Support</h2>
      {message && <p className="mb-4 text-center text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="supportType"
          value={form.supportType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="financial">Financial Support</option>
          <option value="material">Material Support (Equipment, Aids)</option>
        </select>
        <textarea
          name="description"
          placeholder="Describe your needs..."
          value={form.description}
          onChange={handleChange}
          rows={4}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
