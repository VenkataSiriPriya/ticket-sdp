import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaHome, FaInfoCircle, FaUserPlus, FaSignInAlt, FaEnvelope } from 'react-icons/fa';

import Home from './Home';
import About from './About';
import './styles/Navbar.css';
import CustomerLogin from './../customer/CustomerLogin';
import CustomerRegistration from './../customer/CustomerRegistration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import ManagerLogin from '../manager/ManagerLogin';
import NotFound from './NotFound';

export default function MainNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Primetix</div>

        <div className="icons">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}><FaHome /> Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}><FaInfoCircle /> About</Link></li>
          <li><Link to="/customerregistration" onClick={() => setMenuOpen(false)}><FaUserPlus /> Register</Link></li>
          <li className="dropdown">
            <span><FaSignInAlt /> Login ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/customerlogin" onClick={() => setMenuOpen(true)}>Customer</Link></li>
              <li><Link to="/managerlogin" onClick={() => setMenuOpen(true)}>Manager</Link></li>
              <li><Link to="/adminlogin" onClick={() => setMenuOpen(true)}>Admin</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}><FaEnvelope /> Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customerregistration" element={<CustomerRegistration />} />
        <Route path="/customerlogin" element={<CustomerLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/managerlogin" element={<ManagerLogin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
