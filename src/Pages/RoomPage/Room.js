// import React, { useState, useEffect } from 'react';
// import './Room.css';
// import RoomCard from '../../Components/RoomCardCom/RoomCard';
// import standard from '../../Assets/standard.png';
// import deluxe from '../../Assets/deluxe.png';
// import luxury from '../../Assets/luxury.png';

// const API_BASE_URL = "http://localhost:8080"; 

// const mapImage = (roomType) => {
//     const lowerType = roomType ? roomType.toLowerCase() : '';
//     if (lowerType.includes('standard')) return standard;
//     if (lowerType.includes('deluxe')) return deluxe;
//     if (lowerType.includes('luxury')) return luxury;
//     return standard;
// };

// const Room = ({ selectedRoom, setSelectedRoom }) => {
//     const [rooms, setRooms] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchRooms = async () => {
//             try {
//                 const response = await fetch(`${API_BASE_URL}/api/room/getAllRoom`); 
                
//                 if (!response.ok) {
//                     throw new Error(`Failed to fetch room data. Status: ${response.status}`);
//                 }
                
//                 const data = await response.json();
                
//                 const roomsWithAssets = data.map(room => ({
//                     id: room.roomId,           
//                     title: room.roomType,      
//                     price: room.pricePerNight, 
//                     image: mapImage(room.roomType), 
//                 }));
//                 setRooms(roomsWithAssets);

//             } catch (err) {
//                 console.error("Error fetching rooms:", err);
//                 setError("Failed to load room data. Check backend connection (Port 8080) and MySQL data.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchRooms();
//     }, []); 

//     if (loading) {
//         return (
//             <div className="room-page">
//                 <h1 className="page-title">Rooms</h1>
//                 <p className="page-subtitle">Loading available rooms...</p>
//             </div>
//         );
//     }
    
//     if (error) {
//         return (
//             <div className="room-page" style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
//                 <h1 className="page-title">Rooms</h1>
//                 <p className="page-subtitle">{error}</p>
//             </div>
//         );
//     }
    
//     return (
//         <div className="room-page">
//             <h1 className="page-title">Rooms</h1>
//             <p className="page-subtitle">Choose what room you prefer</p>
            
//             <div className="room-grid">
//                 {rooms.map(room => (
//                     <RoomCard
//                         key={room.id}
//                         title={room.title}
//                         price={room.price}
//                         image={room.image}
//                         selected={selectedRoom === room.id}
//                         onClick={() => setSelectedRoom(room.id)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Room;

// src/Pages/RoomPage/Room.js

import React from 'react';
import './Room.css';
import RoomCard from '../../Components/RoomCardCom/RoomCard';
import standard from '../../Assets/standard.png';
import deluxe from '../../Assets/deluxe.png';
import luxury from '../../Assets/luxury.png';

const Room = ({ selectedRoom, setSelectedRoom }) => {
    const rooms = [
        { id: 1, title: 'Standard Suite', price: 500, image: standard },
        { id: 2, title: 'Deluxe Suite', price: 1000, image: deluxe },
        { id: 3, title: 'Luxury Suite', price: 1500, image: luxury },
    ];

    return (
        <div className="room-page">
            <h1 className="page-title">Rooms</h1>
            <p className="page-subtitle">Choose what room you prefer</p>
            
            <div className="room-grid">
                {rooms.map(room => (
                    <RoomCard
                        key={room.id}
                        title={room.title}
                        price={room.price}
                        image={room.image}
                        selected={selectedRoom === room.id}
                        onClick={() => setSelectedRoom(room.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Room;