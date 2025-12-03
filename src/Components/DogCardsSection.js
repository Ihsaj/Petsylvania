import React from 'react';
import './DogCardsSection.css';
import Hero1 from '../Assets/DogSectionDashboard/HeroSelection1.jpg';
import Hero2 from '../Assets/DogSectionDashboard/HeroSelection2.jpg';
import Hero3 from '../Assets/DogSectionDashboard/HeroSelection3.jpg';
import Hero4 from '../Assets/DogSectionDashboard/HeroSelection4.jpg';

const DogCardsSection = () => {
  const dogImages = [
    { id: 1, src: Hero1, alt: 'Dog 1' },
    { id: 2, src: Hero2, alt: 'Dog 2' },
    { id: 3, src: Hero3, alt: 'Dog 3' },
    { id: 4, src: Hero4, alt: 'Dog 4' },
  ];

  return (
    <section className="dog-cards-section">
      <div className="dog-cards-container">
        {dogImages.map(dog => (
          <div key={dog.id} className="dog-card">
            <div className="dog-image">
              <img src={dog.src} alt={dog.alt} className="dog-emoji" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DogCardsSection;
