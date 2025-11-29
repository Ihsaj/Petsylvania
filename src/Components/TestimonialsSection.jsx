import React from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  return (
    <section className="section-container">
      <div className="section-box">
        <h2>Testimonials</h2>

        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>“Amazing service! My dog didn't want to go home.”</p>
            <h4>- Sarah L.</h4>
          </div>

          <div className="testimonial-card">
            <p>“Super clean, friendly, and safe. Highly recommended!”</p>
            <h4>- Mark A.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
