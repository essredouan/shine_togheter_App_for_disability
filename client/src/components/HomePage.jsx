import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const cards = [
    { title: 'Events', icon: '🗓️', path: '/event' },
    { title: 'Sports', icon: '♿️', path: '/sports' },
    { title: 'Training', icon: '🧑‍🏫', path: '/training' },
    { title: 'Available Jobs', icon: '💼', path: '/jobs' },
    { title: 'Request', icon: '📥', path: '/request' },
    { title: 'Support', icon: '💰', path: '/support' },
    { title: 'Volunteer', icon: '🙋', path: '/volunteer' },
    { title: 'Organizations', icon: '🏢', path: '/organizations' },
  ];

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
  <div className="logo-container">
   <img src="/shineTOgether logo.jpg" alt="shineTOgether logo" className="logo-image" />
    <h1 className="logo-text">shiny</h1>
  </div>
  <div className="nav-buttons">
    <Link to="/login" className="btn login-btn">Login</Link>
    <Link to="/register" className="btn register-btn">Register</Link>
  </div>
</nav>
{/* 
      <nav className="navbar">
        <h1 className="logo">shineTOgether</h1>
        <div>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </div>
      </nav> */}

      {/* Hero Section */}
      <header className="hero">
        <h2>we stand with you</h2>
        <p>Empowering people with disabilities through community and access.</p>
      </header>

      {/* Cards Section */}
      <div className="cards-container">
        {cards.map((card, i) => (
          <Link to={card.path} key={i} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
          </Link>
        ))}
      </div>

      {/* Footer
      <footer>
        <p>© 2025 shineTOgether. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">🔵</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">📸</a>
          <a href="mailto:support@shinogether.com" aria-label="Email">✉️</a>
        </div>
      </footer> */}
    </div>
  );
}
