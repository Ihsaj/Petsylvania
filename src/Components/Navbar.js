import React from 'react';
import Logo from '../Assets/Logo.png';
import ProfileIcon from '../Assets/ProfileLogo.png'; // import the profile icon
import './Navbar.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookNow = () => {
    switch (location.pathname) {
      case "/":
        navigate("/login");
        break;
      case "/dashboard":
        navigate("/mainlayout-roomservices");
        break;
      default:
        navigate("/login");
        break;
    }
  };

  const getHomePath = () => {
    if (location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/mainlayout') || location.pathname.startsWith('/profile') || location.pathname.startsWith('/petprofile')) {
      return '/dashboard';
    }
    return '/';
  };

  return (
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
