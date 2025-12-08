import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar"; 
import "../Components/Register.css";

const API_BASE_URL = "http://localhost:8080";

export default function Register() {
  const navigate = useNavigate(); 

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "", 
    email: "",
    address: "",
    password: "",         
    confirmPassword: "",  
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    if (!form.firstName || !form.email || !form.password || !form.confirmPassword) {
        setError("Please fill out all required fields.");
        setLoading(false);
        return;
    }
    
    if (!form.email.includes('@')) {
        setError("Please enter a valid email address (must contain '@').");
        setLoading(false);
        return;
    }
    
    if (form.password.length < 8) {
        setError("Password must be at least 8 characters long.");
        setLoading(false);
        return;
    }
    
    if (form.password !== form.confirmPassword) {
        setError("Passwords do not match. Please re-enter.");
        setLoading(false);
        return;
    }

    
    const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        contactNumber: form.contactNumber,
        email: form.email,
        address: form.address,
        password: form.password, 
    };
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/customers/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
      });

        if (response.status === 201) {
            alert("Registration successful! You can now log in.");
            navigate("/login"); 
        } else if (response.status === 409) {
            setError("Email is already registered. Please use a different email.");
            alert("Email is already registered. Please use a different email.");
        }
        else {

            const errorData = await response.json();
            setError(`Registration failed: ${errorData.message || 'Server error.'}`);
            alert(`Registration failed: ${errorData.message || 'Server error.'}`);
      }
    } catch (err) {
        setError("Network error. Please ensure the backend server is running.");
        alert("Network error. Please ensure the backend server is running.");
        console.error("Registration API error:", err);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <Navbar page="register" /> 
      <div className="register-form">
        <h2>Register</h2>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

        <InputField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
        <InputField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
        <InputField label="Contact Number" name="contactNumber" value={form.contactNumber} onChange={handleChange} />
        <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
        <InputField label="Address" name="address" value={form.address} onChange={handleChange} />
        <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
        <InputField label="Confirm Password" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />
        
        <Button 
          text={loading ? "Registering..." : "Confirm"} 
          onClick={handleSubmit} 
          disabled={loading}
        />
        
      </div>
    </div>
  );
}