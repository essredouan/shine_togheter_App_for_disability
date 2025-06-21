import { useEffect, useState } from 'react';
import API from '../services/api';
import './Organizations.css';

export default function Organizations() {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    const fetchOrgs = async () => {
      try {
        const res = await API.get('/organizations');
        setOrgs(res.data);
      } catch (err) {
        console.error('Failed to fetch organizations:', err);
      }
    };

    fetchOrgs();
  }, []);

  return (
    <div className="organizations-container">
      <h2 className="organizations-title">🏢 Registered Organizations</h2>
      <div className="organizations-list">
        {orgs.length > 0 ? (
          orgs.map(org => (
            <div key={org._id} className="organization-card">
              <h3>{org.name}</h3>
              <p><strong>Goal:</strong> {org.goal}</p>
              <p><strong>Email:</strong> {org.email}</p>
            </div>
          ))
        ) : (
          <p>No organizations registered yet.</p>
        )}
      </div>
    </div>
  );
}
