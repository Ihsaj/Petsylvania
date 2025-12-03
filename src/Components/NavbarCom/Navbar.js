import React from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css';
import logo from '../../Assets/Logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Petsylvania Logo" />
      </div>

      <ul className="nav-links">
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <button className="book-btn">Book Now</button>
    </nav>
  );
};

export default Navbar;
