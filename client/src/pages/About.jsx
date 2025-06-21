import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Our Platform</h1>
        <p className="about-text">
          We are a platform dedicated to empowering people with disabilities by providing access to services,
          events, support, and volunteering opportunities. Our goal is to build an inclusive and accessible
          community where everyone can thrive and participate fully.
        </p>

        <h2 className="about-subtitle">What We Offer</h2>
        <ul className="about-list">
          <li>🧑‍🦽 Organize and discover inclusive events</li>
          <li>🤝 Request or offer support (financial & material)</li>
          <li>🌍 Connect with volunteers and organizations</li>
          <li>📣 Raise awareness and share experiences</li>
        </ul>

        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-text">
          We believe that inclusion is a right, not a privilege. Through this platform, we aim to break
          down barriers, eliminate discrimination, and create opportunities for all.
        </p>
      </div>
    </div>
  );
}
