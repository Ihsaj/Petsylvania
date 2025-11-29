import React from 'react';
import '../Pages/LandingPage.css';

import Navbar from '../Components/Navbar';
import TestimonialsSection from '../Components/TestimonialsSection';

const TestimonialsPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        <div id="testimonials" className="section-container">
          <TestimonialsSection />
        </div>
      </main>
    </div>
  );
};

export default TestimonialsPage;
