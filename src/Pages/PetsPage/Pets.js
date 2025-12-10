import React from 'react';
import './Pets.css';
import PetForm from './PetForm'; 

const Pets = ({ pets, setPets }) => {

  const handleChange = (index, field, value) => {
    setPets(prevPets => 
      prevPets.map((pet, i) => 
        i === index ? { ...pet, [field]: value } : pet
      )
    );
  };

  const addPet = () => {
    setPets(prev => [...prev, { name: '', type: '', breed: '', age: '' }]);
  };

  const removePet = (index) => {
    setPets(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="pets-page">
      <h1 className="page-title">Pet Details</h1>
      <p className="page-subtitle">Tell us about your furry friends</p>

      <div className="pets-list">
        {pets.map((pet, index) => (
          <PetForm 
            key={index}
            index={index}
            pet={pet}
            onChange={handleChange}
            onRemove={removePet}
            showRemove={pets.length > 1}
          />
        ))}
      </div>

      <div className="action-buttons">
        <button className="add-pet-btn" onClick={addPet}>
            + Add Another Pet
        </button>
      </div>
    </div>
  );
};

export default Pets;