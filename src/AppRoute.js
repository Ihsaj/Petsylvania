import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import AboutUsPage from './Pages/AboutUsPage';
import TestimonialsPage from './Pages/TestimonialsPage';
import ContactUsPage from './Pages/ContactUsPage';
import Register from './Pages/Register'; 
import DashboardPage from './Pages/DashboardPage';
import MainLayout from './Pages/MainLayout';
import ProfilePage from './Pages/ProfilePage';
import PetProfilePage from './Pages/PetProfilePage';
import ConfirmationPage from './Pages/ConfirmationPage';
import ReviewBooking from './Pages/ReviewBookingPage/ReviewBooking';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/register" element={<Register />} />  
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/mainlayout-roomservices" element={<MainLayout />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/petprofile" element={<PetProfilePage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/review-booking" element={<ReviewBooking />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

