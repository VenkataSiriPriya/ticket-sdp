import { useState } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext'; 
import "./Styles/AdminLogin.css"; // Assuming you have a CSS file for styling

export default function AdminLogin() 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setIsAdminLoggedIn} = useAuth();

  const handleChange = (e) => 
  {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/admin/checkadminlogin`, formData);
      if (response.status === 200) 
      {
        setIsAdminLoggedIn(true);
        navigate("/adminhome");
      }
      else 
      {
        setMessage(response.data);
      }
    } 
    catch (error) 
    {
      if (error.response) 
      {
        setError(error.response.data);
      } 
      else 
      {
        setError("An unexpected error occurred.");
      }
    }
  };

return (
  <div className="admin-login-container">
    <h3 className="admin-login-title">Admin Login</h3>

    {message ? (
      <p className="admin-response-message success">{message}</p>
    ) : (
      <p className="admin-response-message error">{error}</p>
    )}

    <form onSubmit={handleSubmit} className="admin-login-form">
      <div className="admin-form-field">
        <label>Username</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="admin-form-field">
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="admin-submit-btn">Login</button>
    </form>
  </div>
);


}