import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';
import "./ManSty/ManagerLogin.css";

export default function ManagerLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setIsManagerLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/manager/checkmanagerlogin`, formData);

      if (response.status === 200) {
        sessionStorage.setItem('manager', JSON.stringify(response.data)); // Store the full manager object
        setIsManagerLoggedIn(true);
        navigate("/managerhome");
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="manager-login-container">
      <h3 className="manager-login-title">Manager Login</h3>
      {
        message
          ? <p className="manager-response-message success">{message}</p>
          : <p className="manager-response-message error">{error}</p>
      }
      <form onSubmit={handleSubmit} className="manager-login-form">
        <div className="manager-form-field">
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="manager-form-field">
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="manager-submit-btn">Login</button>
      </form>
    </div>
  );
}
