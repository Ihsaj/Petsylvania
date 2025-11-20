import React from 'react';
import './SearchSection.css';
import { FaSearch } from "react-icons/fa";

const SearchSection = ({ activeTab, setActiveTab, formData, handleInputChange, handleSubmit }) => {
  const tabs = ['Hotel', 'Day Care', 'Grooming', 'Training'];

  return (
    <div className="search-section">
    
      <div className="search-fields">

      <div className="field">
        <label>Location</label>
        <input type="text" placeholder="Which branch do you prefer?" />
      </div>

      <div className="divider"></div>

      <div className="field">
        <label>Check In</label>
        <input type="text" placeholder="Add Dates" />
      </div>

      <div className="divider"></div>

      <div className="field">
        <label>Check Out</label>
        <input type="text" placeholder="Add Dates" />
      </div>

      <div className="divider"></div>

      <div className="field">
        <label>Pet Count</label>
        <input type="text" placeholder="Add Pets" />
      </div>

      </div>

      <button className="search-btn">
        <FaSearch color="#fff" size="18px"/>
      </button>

    </div>
  );
};

export default SearchSection;
