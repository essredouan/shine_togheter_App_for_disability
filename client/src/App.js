import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRout';
import ForgotPassword from './pages/ForgotPassword';
import Organizations from './pages/Organizations'; // import page


import HomePage from './components/HomePage';
import Event from './pages/Event';
import Volunteer from './pages/Volunteer';
import Request from './pages/Request';
import Support from './pages/Support';
import About from './pages/About';
import Sports from './pages/Sports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<Event />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/request" element={<Request />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/organizations" element={<Organizations />} />
        {/* Route محمي بالـ ProtectedRoute */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
