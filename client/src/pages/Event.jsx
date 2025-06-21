import { useEffect, useState } from 'react';
import API from '../services/api';
import './Events.css';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // 1. Fetch events from the backend API
        const res = await API.get('/events');

        // 2. Add custom disability-related events manually
        const extraEvents = [
          {
            _id: 'e1',
            title: "Digital Empowerment Workshop",
            description: "A session to teach people with disabilities how to use digital tools.",
            date: "2025-07-10",
            location: "Social Support Center, Rabat"
          },
          {
            _id: 'e2',
            title: "Paralympic Sports Tournament",
            description: "A national sports event for disabled athletes across Morocco.",
            date: "2025-07-20",
            location: "Covered Sports Hall, Agadir"
          },
          {
            _id: 'e3',
            title: "Graphic Design Training",
            description: "Free design course for youth with disabilities.",
            date: "2025-07-15",
            location: "Tech Institute, Casablanca"
          },
          {
            _id: 'e4',
            title: "Disability-Friendly Job Fair",
            description: "An open recruitment day to connect people with disabilities and companies.",
            date: "2025-07-25",
            location: "Employment Hub, Tangier"
          },
          {
            _id: 'e5',
            title: "Art & Creativity Festival",
            description: "Showcase of talents by disabled individuals in music, painting, and drama.",
            date: "2025-08-05",
            location: "Cultural House, Fez"
          }
        ];

        // 3. Merge backend events with manually added ones
        setEvents([...res.data, ...extraEvents]);
      } catch (err) {
        console.error('Failed to fetch events:', err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <h1 className="events-title">📅 Upcoming Events</h1>
      <div className="events-list">
        {events.length > 0 ? (
          events.map(event => (
            <div key={event._id} className="event-card">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          ))
        ) : (
          <p className="no-events">No events available yet.</p>
        )}
      </div>
    </div>
  );
}
