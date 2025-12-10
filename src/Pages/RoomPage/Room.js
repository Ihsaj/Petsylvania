import React, { useState, useEffect } from 'react'; 
import './Room.css';
import RoomCard from '../../Components/RoomCardCom/RoomCard';
import standard from '../../Assets/standard.png';
import deluxe from '../../Assets/deluxe.png';
import luxury from '../../Assets/luxury.png';

const Room = ({ selectedRoom, setSelectedRoom }) => {
  // 1. STATE: Start with an empty list
  const [rooms, setRooms] = useState([]); 

  // 2. FETCH: Go to the database when the page loads
  useEffect(() => {
    fetch('http://localhost:8080/api/room/getAllRoom')
      .then(response => response.json())
      .then(data => {
        console.log("Data loaded from DB:", data); // This will show in your console!
        setRooms(data);
      })
      .catch(error => console.error("Error fetching rooms:", error));
  }, []);

  // 3. IMAGE HELPER: Pick the right picture based on the room name
  const getRoomImage = (roomType) => {
    const type = roomType ? roomType.toLowerCase() : "";
    if (type.includes('luxury')) return luxury;
    if (type.includes('deluxe')) return deluxe;
    return standard; 
  };

  return (
    <div className="room-page">
      <h1 className="page-title">Rooms</h1>
      <p className="page-subtitle">Choose what room you prefer</p>
      
      <div className="room-grid">
        {rooms.length === 0 ? <p>Loading rooms from database...</p> : rooms.map(room => (
          <RoomCard
            key={room.roomId}          // Backend uses 'roomId'
            title={room.roomType}      // Backend uses 'roomType'
            price={room.pricePerNight} // Backend uses 'pricePerNight'
            image={getRoomImage(room.roomType)}
            selected={selectedRoom === room.roomId}
            onClick={() => setSelectedRoom(room.roomId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Room;