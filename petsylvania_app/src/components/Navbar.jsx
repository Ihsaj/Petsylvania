import React from 'react';
import Logo from '../Assets/Logo.png';
import './Navbar.css';
import { useNavigate, Link} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/login');
  }

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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <button className="book-btn" onClick={handleBookNow}>Book Now</button>
    </nav>
  );
};    

export default Navbar;
