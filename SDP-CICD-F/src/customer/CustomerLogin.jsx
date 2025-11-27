import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config.js';
import { useAuth } from '../contextapi/AuthContext';
import "./custstyles/CustomerLogin.css";

export default function CustomerLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);

  const navigate = useNavigate();
  const { setIsCustomerLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/customer/checkcustomerlogin`, formData);

      if (response.status === 200) {
        setIsCustomerLoggedIn(true);
        sessionStorage.setItem('customer', JSON.stringify(response.data));
        navigate('/customerhome');
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data || "Login failed. Please try again.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="customer-login-container">
      <h3 className="customer-login-title">Customer Login</h3>
      {
        message
          ? <p className="customer-response-message success">{message}</p>
          : error && <p className="customer-response-message error">{error}</p>
      }
      <form className="customer-login-form" onSubmit={handleSubmit}>
        <div className="customer-form-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="customer-form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="customer-submit-btn">Login</button>

      <section id="booking" className="booking">
        <h3>Book Your Ticket</h3>
        <div className="booking-options">
          <a href="/viewallevents">🎬 Movies</a>
          <a href="/travel">🚗 Travel</a>
          <a href="/viewallevents">🎟️ Events</a>
        </div>
      </section>

      </form>
    </div>
  );
}
