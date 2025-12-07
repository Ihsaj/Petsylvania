import React from 'react';
import Logo from '../Assets/Logo.png';
import ProfileIcon from '../Assets/ProfileLogo.png'; 
import './Navbar.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookNow = () => {
    // List all public pages where 'Book Now' should go to /login
    const publicPages = [
      "/", 
      "/about", 
      "/testimonials", 
      "/contact"
    ];

    // Check if the current path is the dashboard
    if (location.pathname === "/dashboard") {
      navigate("/mainlayout-roomservices"); // DashboardPage -> MainLayout for booking
    } 
    // Check if the current path is one of the public pages
    else if (publicPages.includes(location.pathname)) {
      navigate("/login"); // Public Pages -> Login Page
    } 
    // Default behavior for other paths (e.g., /register, /login, or other pages)
    else {
      // You can keep a default redirect, which for safety, is often /login
      navigate("/login");
    }
  };

  const getHomePath = () => {
    if (location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/mainlayout') || location.pathname.startsWith('/profile') || location.pathname.startsWith('/petprofile')) {
      return '/dashboard';
    }
    return '/';
  };

  return (
    // ... (rest of the Navbar component JSX)
    <nav className="navbar">
      <div className="logo">
        <img 
          src={Logo}
          alt="Petsylvania Logo"
          className="logo-img"
        />
      </div>

      <ul className="nav-links">
        <li><Link to={getHomePath()}>Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="nav-actions">
        {/* The updated logic will run on this button click */}
        <button className="book-btn" onClick={handleBookNow}>
          Book Now
        </button>

        {location.pathname === '/dashboard' && (
          <img
            src={ProfileIcon}
            alt="Profile"
            className="dashboard-profile-icon"
            onClick={() => navigate('/profile')}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;