import React from 'react';
import './PetInfoForm.css';

const PetInfoForm = ({ petData, handleChange, handleSaveChanges }) => {
  return (
    <div className="pet-info-form">
      <div className="pet-form-header">
        <h1 className="pet-form-title">Pet Information</h1>
        <button className="pet-save-btn" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>

      <div className="pet-profile-avatar">
        <div className="pet-avatar-circle"></div>
      </div>

      <div className="pet-form-content">
        <div className="pet-form-row">
          <div className="pet-form-group">
            <label className="pet-form-label">Type</label>
            <input
              type="text"
              value={petData.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="pet-form-input"
              placeholder="Enter pet type"
            />
          </div>
          <div className="pet-form-group">
            <label className="pet-form-label">Special Notes</label>
            <input
              type="text"
              value={petData.specialNotes}
              onChange={(e) => handleChange('specialNotes', e.target.value)}
              className="pet-form-input"
              placeholder="Enter special notes"
            />
          </div>
        </div>

        <div className="pet-form-row">
          <div className="pet-form-group">
            <label className="pet-form-label">Breed</label>
            <input
              type="text"
              value={petData.breed}
              onChange={(e) => handleChange('breed', e.target.value)}
              className="pet-form-input"
              placeholder="Enter breed"
            />
          </div>
        </div>

        <div className="pet-form-row">
          <div className="pet-form-group">
            <label className="pet-form-label">Age</label>
            <input
              type="text"
              value={petData.age}
              onChange={(e) => handleChange('age', e.target.value)}
              className="pet-form-input"
              placeholder="Enter age"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInfoForm;