import React from 'react';
import './ClubCard.css';

const ClubCard = ({ club }) => {
  return (
    <div className="club-card" style={{ backgroundColor: club.background_color }}>
      <img src={club.thumbnail} alt={club.name} className="club-image" />
      <div className="club-details">
        <h2 className="club-name">{club.name}</h2>
        <p> Club Category </p>
      </div>
    </div>
  );
};

export default ClubCard;