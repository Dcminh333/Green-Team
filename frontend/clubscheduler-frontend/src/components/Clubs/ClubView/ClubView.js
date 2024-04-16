import React, { useEffect } from 'react';
import './ClubView.css';
import { BsFillPersonPlusFill } from "react-icons/bs";

function addThumbnail(club) {
    if (club.thumbnail !== null) {
      return (<img src={club.thumbnail} alt={club.name + ' Logo'} className='club-image'/>)
    }
    else {
      return <BsFillPersonPlusFill className='club-image' />
    }
  }


const ClubView = ({club}) => {
    console.log(club);

    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', club.background_color);
    }, [club])

    return (
        <div className="club-details">
        <h1>{club.name}</h1>
        <div className="club-logo">
            {addThumbnail(club)}
        </div>
        <div className="creator">
            <h2>{club.creator}</h2>
        </div>
        <div className="description">
            <h2>Description:</h2>
            <p>{club.description}</p>
        </div>
        <div className="members">
            <h2>Current Members:</h2>
            <ul>
                <li>Member 1</li>
                <li>Member 2</li>
                <li>Member 3</li>
            </ul>
        </div>
    </div>
    );
  };
  
  export default ClubView;