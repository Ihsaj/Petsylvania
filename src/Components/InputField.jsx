import React from "react";
import "../Css/InputField.css"; // CSS for inputs

export default function InputField({ label, name, type = "text", value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} name={name} value={value} onChange={onChange} placeholder={label} />
    </div>
  );
}
