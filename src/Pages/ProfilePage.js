import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import '../Pages/ProfilePage.css';

import Navbar from '../Components/Navbar';
import ProfileSidebar from '../Components/ProfileSidebar';
import PersonalInfoForm from '../Components/PersonalInfoForm';

const API_BASE_URL = "http://localhost:8080";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('personal');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [customerId, setCustomerId] = useState(null);

    const [profileData, setProfileData] = useState({
        firstName: '', 
        lastName: '',
        email: '',
        contactNumber: '', 
        address: '',
        password: '',       
        currentPassword: '', 
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                setCustomerId(user.customerId); 
                setProfileData({
                    firstName: user.firstName || '',
                    lastName: user.lastName || '',
                    email: user.email || '',
                    contactNumber: user.contactNumber || '', 
                    address: user.address || '',
                    password: '',       
                    currentPassword: '',
                });
            } catch (e) {
                console.error("Error parsing user data from localStorage:", e);
                setError("Failed to load user profile.");
            }
        } else {
            navigate("/login");
        }
    }, [navigate]); 

    const handleChange = (field, value) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSaveChanges = async () => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        if (!customerId) {
            setError("User ID not found. Please log in again.");
            setLoading(false);
            return;
        }
        
        const updatePayload = {
            firstName: profileData.firstName,
            lastName: profileData.lastName,
            contactNumber: profileData.contactNumber,
            email: profileData.email,
            address: profileData.address,
            password: profileData.password || null, 
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/customers/${customerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatePayload),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                
                const userToStore = { ...updatedUser };
                delete userToStore.password;
                localStorage.setItem('user', JSON.stringify(userToStore));

                setSuccess("Profile updated successfully!");
                setProfileData(prev => ({ ...prev, password: '', currentPassword: '' })); 

            } else {
                const errorData = await response.json().catch(() => ({ message: 'Server error occurred.' }));
                setError(`Update failed: ${errorData.message || response.statusText}`);
            }
        } catch (err) {
            console.error("Profile update API error:", err);
            setError("Network error. Could not connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="profile-page">
            <Navbar />
            
            <main>
                <div className="profile-container">
                    <ProfileSidebar 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab}
                        title="User Profile Management"
                    />
                    
                    {error && <p style={{ color: 'red', margin: '10px 0' }}>{error}</p>}
                    {success && <p style={{ color: 'green', margin: '10px 0' }}>{success}</p>}
                    
                    <PersonalInfoForm 
                        profileData={profileData}
                        handleChange={handleChange}
                        handleSaveChanges={handleSaveChanges}
                        loading={loading}
                    />
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;