import React from "react";
import "../Css/Button.css"; // CSS for buttons

export default function Button({ text, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
}
