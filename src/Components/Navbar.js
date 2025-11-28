import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Petsylvania Logo" />
      </div>

      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About Us</Link></li>
        <li><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
        <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
      </ul>

      <button className="book-btn">Book Now</button>
    </nav>
  );
};

export default Navbar;
