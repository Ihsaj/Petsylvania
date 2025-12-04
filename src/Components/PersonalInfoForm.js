import React from 'react';
import './PersonalInfoForm.css';

const PersonalInfoForm = ({ profileData, handleChange, handleSaveChanges }) => {
  return (
    <div className="personal-info-form">
      <div className="form-header">
        <h1 className="form-title">Personal Information</h1>
        <button className="save-btn" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>

      <div className="profile-avatar">
        <div className="avatar-circle"></div>
      </div>

      <div className="form-content">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              value={profileData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className="form-input"
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last name</label>
            <input
              type="text"
              value={profileData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className="form-input"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="form-input"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              value={profileData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
              className="form-input"
              placeholder="Enter phone number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;