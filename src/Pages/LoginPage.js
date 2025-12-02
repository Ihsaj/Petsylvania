import React, { useState } from 'react';
import '../Pages/LoginPage.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    navigate('/'); // after login, goes to landing page
  };

  const goToRegister = () => {
    navigate('/register'); // navigate to register page
  };

  return (
    <div className="login-page">
      <Navbar />

      <div className="login-container">
        <h2>Login to Petsylvania</h2>
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

          <button type="submit" className="login-btn">Login</button>

          <div className="login-links">
            <button type="button" className="link-btn">Forgot Password?</button>
            <button
              type="button"
              className="link-btn"
              onClick={goToRegister} // <-- this line added
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
