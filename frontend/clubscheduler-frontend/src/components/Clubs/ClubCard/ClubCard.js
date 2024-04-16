import React from 'react';
import './ClubCard.css';
import { BsFillPersonPlusFill } from "react-icons/bs";

function addThumbnail(club) {
  if (club.thumbnail !== null) {
    return (<img src={club.thumbnail} alt={club.name + ' Logo'} className='club-image'/>)
  }
  else {
    return <BsFillPersonPlusFill className='club-image' />
  }
}

const ClubCard = ({ club }) => {
  return (
    <div key={club.id} className="club-card" style={{ backgroundColor: club.background_color }}>
      <div className="club-image-container">
        {addThumbnail(club)}
      </div>
      <div className="club-details">
        <h2 className="club-name">{club.name}</h2>
        <p> Club Category </p>
      </div>  
    </div>
  );
};

export default ClubCard;