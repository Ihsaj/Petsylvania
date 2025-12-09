import React from 'react';
import './PersonalInfoForm.css';

const PersonalInfoForm = ({ profileData, handleChange, handleSaveChanges, loading }) => {
    
    const isChangingPassword = profileData.password && profileData.password.length > 0;
    const isSaveDisabled = loading || (isChangingPassword && !profileData.currentPassword);

    return (
        <div className="personal-info-form">
            <div className="form-header">
                <h1 className="form-title">Personal Information</h1>
                <button 
                    className="save-btn" 
                    onClick={handleSaveChanges}
                    disabled={isSaveDisabled}
                >
                    {loading ? "Saving..." : "Save Changes"}
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
                            value={profileData.contactNumber} 
                            onChange={(e) => handleChange('contactNumber', e.target.value)}
                            className="form-input"
                            placeholder="Enter phone number"
                        />
                    </div>
                </div>
                <div className="form-row full-width">
                    <div className="form-group">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            value={profileData.address}
                            onChange={(e) => handleChange('address', e.target.value)}
                            className="form-input"
                            placeholder="Enter your address"
                        />
                    </div>
                </div>
                <h2 className="sub-section-title">Change Password</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">New Password</label>
                        <input
                            type="password"
                            value={profileData.password}
                            onChange={(e) => handleChange('password', e.target.value)}
                            className="form-input"
                            placeholder="Leave blank to keep current password"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Current Password</label>
                        <input
                            type="password"
                            value={profileData.currentPassword}
                            onChange={(e) => handleChange('currentPassword', e.target.value)}
                            className="form-input"
                            placeholder="Required to save changes"
                            required={isChangingPassword}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoForm;