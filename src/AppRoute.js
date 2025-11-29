import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import AboutUsPage from './Pages/AboutUsPage';
import TestimonialsPage from './Pages/TestimonialsPage';
import ContactUsPage from './Pages/ContactUsPage';
import Register from './Pages/Register'; 

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/register" element={<Register />} />  {/* <-- new route */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;

