import React from 'react';
import './ProfileSidebar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfileSidebar = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab =
    location.pathname === '/petprofile' ? 'pet' : 'personal';

  return (
    <aside className="profile-sidebar">
      <h2 className="sidebar-title">{title}</h2>

      <button
        className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
        onClick={() => navigate('/profile')}
      >
        Personal Info
      </button>

      <button
        className={`tab-button ${activeTab === 'pet' ? 'active' : ''}`}
        onClick={() => navigate('/petprofile')}
      >
        Pet Info
      </button>
    </aside>
  );
};

export default ProfileSidebar;
