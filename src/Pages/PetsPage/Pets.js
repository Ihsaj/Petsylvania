import React from 'react';
import './Pets.css';

const Pets = ({ pets, setPets }) => {
  const addPet = () => {
    setPets([...pets, { name: '', type: '', breed: '', age: '' }]);
  };

  const removePet = (index) => {
    setPets(pets.filter((_, i) => i !== index));
  };

  const updatePet = (index, field, value) => {
    const updatedPets = [...pets];
    updatedPets[index][field] = value;
    setPets(updatedPets);
  };

  return (
    <div className="pets-page">
      <h1 className="page-title">Pets</h1>
      <p className="page-subtitle">Tell us about your pets</p>
      
      <div className="pets-container">
        {pets.map((pet, index) => (
          <div key={index} className="pet-card">
            <div className="pet-header">
              <h3 className="pet-title">Pet {index + 1}</h3>
              {pets.length > 1 && (
                <button 
                  onClick={() => removePet(index)}
                  className="remove-btn"
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="pet-form">
              <div className="form-group">
                <label className="form-label">Pet Name</label>
                <input
                  type="text"
                  value={pet.name}
                  onChange={(e) => updatePet(index, 'name', e.target.value)}
                  placeholder="Enter pet name"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Type</label>
                <select
                  value={pet.type}
                  onChange={(e) => updatePet(index, 'type', e.target.value)}
                  className="form-input"
                >
                  <option value="">Select type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Breed</label>
                <input
                  type="text"
                  value={pet.breed}
                  onChange={(e) => updatePet(index, 'breed', e.target.value)}
                  placeholder="Enter breed"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  value={pet.age}
                  onChange={(e) => updatePet(index, 'age', e.target.value)}
                  placeholder="Enter age"
                  className="form-input"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button onClick={addPet} className="add-btn">
          + Add Another Pet
        </button>
      </div>
    </div>
  );
};

export default Pets;