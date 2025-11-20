import React, { useState } from "react";
import "../Css/Register.css";  // import Register CSS
import InputField from "../Components/InputField.jsx";
import "../Css/InputField.css"; // import InputField CSS
import Button from "../Components/Button.jsx";
import "../Css/Button.css";     // import Button CSS

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Registered Successfully!");
    console.log(form);
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h2>Register</h2>
        <InputField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
        <InputField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
        <InputField label="Contact Number" name="contact" value={form.contact} onChange={handleChange} />
        <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
        <InputField label="Address" name="address" value={form.address} onChange={handleChange} />
        <Button text="Confirm" onClick={handleSubmit} />
      </div>
    </div>
  );
}
