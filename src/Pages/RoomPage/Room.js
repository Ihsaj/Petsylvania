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