import React from 'react';
import '../Pages/LandingPage.css';

import Navbar from '../Components/Navbar';
import AboutSection from '../Components/AboutSection';

const AboutUsPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        <div id="about" className="section-container">
          <AboutSection />
        </div>
      </main>
    </div>
  );
};

export default AboutUsPage;
