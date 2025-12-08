import react, { useState } from 'react';
import '../Pages/LoginPage.css';

import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';  

const API_BASE_URL = "http://localhost:8080";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setLoading(true);
    setError(null);

    if (!email || !password) {
        setError("Email and password are required.");
        setLoading(false);
        return;
    }

    if (!email.includes('@')) {
        setError("Please enter a valid email address.");
        setLoading(false);
        return;
    }
    
    if (password.length < 8) {
        setError("Password must be at least 8 characters long.");
        setLoading(false);
        return;
    }

    const payload = { email, password };

    try {
      const response = await fetch(`${API_BASE_URL}/api/customers/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const userData = await response.json();

        localStorage.setItem('user', JSON.stringify(userData));

        navigate("/dashboard"); 

      } else if (response.status === 401) {
        setError("Invalid email or password. Please try again.");
      } else {
        const errorText = await response.text();
         setError(`Login failed: ${errorText || 'An unexpected server error occurred.'}`);
      }
    } catch (err) {
       setError("Network error. Please ensure the backend server is running on port 8080.");
      console.error("Login API error:", err);
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };


  return (
    <div className="login-page">
      <Navbar />

      <div className="login-container">
        <h2>Login to Petsylvania</h2>

        <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>

          <div className="login-links">
            <button type="button" className="link-btn">Forgot Password?</button>
            <button
              type="button"
              className="link-btn"
              onClick={goToRegister}
            >
              Register Here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
