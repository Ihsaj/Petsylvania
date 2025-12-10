import React from 'react';

const PetForm = ({ index, pet, onChange, onRemove, showRemove }) => {
  return (
    <div className="pet-card-form">
      <div className="card-header">
        <h3>Pet #{index + 1}</h3>
        {showRemove && (
          <button className="remove-btn" onClick={() => onRemove(index)}>✖</button>
        )}
      </div>

      <div className="form-group">
        <label>Name</label>
        <input 
          type="text" 
          placeholder="Pet's Name"
          value={pet.name}
          onChange={(e) => onChange(index, 'name', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Type</label>
        <select 
          value={pet.type} 
          onChange={(e) => onChange(index, 'type', e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Breed</label>
          <input 
            type="text" 
            placeholder="e.g. Golden Retriever"
            value={pet.breed}
            onChange={(e) => onChange(index, 'breed', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input 
            type="text" 
            placeholder="e.g. 2 years"
            value={pet.age}
            onChange={(e) => onChange(index, 'age', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PetForm;