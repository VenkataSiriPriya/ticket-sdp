import './custstyles/CustReg.css';
import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function CustomerRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    location: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/customer/registration`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          name: '',
          gender: '',
          dob: '',
          email: '',
          username: '',
          password: '',
          mobileno: '',
          location: ''
        });
      }
    } catch (error) {
      setMessage('');
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="customer-registration-container">
      <h3 className="customer-registration-title">Customer Registration</h3>

    

      <form className="customer-registration-form" onSubmit={handleSubmit}>
        <div className="customer-form-field">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="customer-form-field">
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>


        <div className="customer-form-field">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        <div className="customer-form-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="customer-form-field">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>

        <div className="customer-form-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="customer-form-field">
          <label htmlFor="mobileno">Mobile No</label>
          <input type="number" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
        </div>

        <div className="customer-form-field">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>

          {message ? (
        <p className="customer-response-message success">{message}<a href="/customer/customerlogin">Login here</a></p>
      ) : (
        <p className="customer-response-message error">{error}</p>
      )}

        <button type="submit" className="customer-submit-btn">Register</button>
      </form>
      <div className="customer-registration-footer">
        <p>Already have an account? <a href="/customer/login">Login here</a></p>
        <p>By registering, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
      </div>

    </div>
  );
}
