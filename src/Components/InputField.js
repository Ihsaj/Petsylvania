// Correct default export
import React from 'react';
import './InputField.css';

const InputField = ({ label, type = 'text', name, value, onChange }) => (
  <div className="input-field">
    {label && <label>{label}</label>}
    <input type={type} name={name} value={value} onChange={onChange} />
  </div>
);

export default InputField; // ✅ Default export
