import { useEffect, useState } from 'react';
import API from '../services/api';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '' });
  const [newJob, setNewJob] = useState({ title: '', description: '', company: '', location: '' });

  // Fetch data
  useEffect(() => {
    fetchUsers();
    fetchEvents();
    fetchJobs();
  }, []);

  const fetchUsers = async () => {
    const res = await API.get('/admin/users');
    setUsers(res.data);
  };

  const fetchEvents = async () => {
    const res = await API.get('/admin/events');
    setEvents(res.data);
  };

  const fetchJobs = async () => {
    const res = await API.get('/admin/jobs');
    setJobs(res.data);
  };

  // Delete functions
  const deleteUser = async (id) => {
    await API.delete(`/admin/users/${id}`);
    fetchUsers();
  };

  const deleteEvent = async (id) => {
    await API.delete(`/admin/events/${id}`);
    fetchEvents();
  };

  const deleteJob = async (id) => {
    await API.delete(`/admin/jobs/${id}`);
    fetchJobs();
  };

  // Add Event
  const addEvent = async (e) => {
    e.preventDefault();
    await API.post('/admin/events', newEvent);
    setNewEvent({ title: '', description: '', date: '' });
    fetchEvents();
  };

  // Add Job
  const addJob = async (e) => {
    e.preventDefault();
    await API.post('/admin/jobs', newJob);
    setNewJob({ title: '', description: '', company: '', location: '' });
    fetchJobs();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>

      <section>
        <h2>Users</h2>
        <ul>
          {users.map(u => (
            <li key={u._id}>
              {u.username} ({u.email}) - {u.role}
              <button onClick={() => deleteUser(u._id)} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Events</h2>
        <form onSubmit={addEvent}>
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={newEvent.description}
            onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
            required
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
          <button type="submit">Add Event</button>
        </form>
        <ul>
          {events.map(ev => (
            <li key={ev._id}>
              {ev.title} - {new Date(ev.date).toLocaleDateString()}
              <button onClick={() => deleteEvent(ev._id)} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Jobs</h2>
        <form onSubmit={addJob}>
          <input
            type="text"
            placeholder="Title"
            value={newJob.title}
            onChange={e => setNewJob({ ...newJob, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={newJob.description}
            onChange={e => setNewJob({ ...newJob, description: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Company"
            value={newJob.company}
            onChange={e => setNewJob({ ...newJob, company: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={newJob.location}
            onChange={e => setNewJob({ ...newJob, location: e.target.value })}
            required
          />
          <button type="submit">Add Job</button>
        </form>
        <ul>
          {jobs.map(job => (
            <li key={job._id}>
              {job.title} at {job.company} ({job.location})
              <button onClick={() => deleteJob(job._id)} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
