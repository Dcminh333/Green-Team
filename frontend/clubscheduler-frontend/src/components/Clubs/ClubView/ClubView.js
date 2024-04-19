import React, { useCallback, useEffect, useState } from 'react';
import { getUser } from '../../../api/apiUsers';
import './ClubView.css';
import { BsFillPersonPlusFill } from "react-icons/bs";
import Spinner from '../../Spinner';

function addThumbnail(club) {
    if (club.thumbnail !== null) {
      return (<img src={club.thumbnail} alt={club.name + ' Logo'} className='club-image'/>)
    }
    else {
      return <BsFillPersonPlusFill className='club-image' />
    }
  }

  function addMembers(members) {
    console.log(members);
    if (members) {
        return (
            members.length !== 0 ? (
                members.map(member => (
                    <li key={member.id}>
                        {`${member.first_name} ${member.last_name}`}
                    </li>
                ))
            ) : (
                <li>
                    {"No members yet"}
                </li>
            )
        );
    }
    else {
        return (
            <li>
                {"No members yet"}
            </li>
        )
    }
    
  }
  
const ClubView = ({club}) => {

    const [creator, setCreator] = useState(null);
    const [members, setMembers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const getCreator = useCallback(async (club) => { 
        if (club.creator) {
            const response = await getUser(club.creator)
            if (response.error) {
                console.log(response.error);
                setIsLoading(false);
            }
            else {
                setIsLoading(false);
                setCreator(response.data);
                console.log(response.data);
            }
        }
        console.log(creator);
    }, [creator]);

    const getMembers = useCallback( async (club) => {
        try {
            if (club.members) {
                const userPromises = club.members.map(async (member) => {  
                    return getUser(member);
                });
                const userData = await Promise.all(userPromises);
                console.log(userData);
                setMembers(userData.map(response => response.data));
                console.log(members);
                setIsLoading(false);
            }
        }
        catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    }, [members, club])

    useEffect(() => { 
        if (!creator)
            getCreator(club);
        if (!members)
            getMembers(club);
    }, [club, creator, members, getCreator, getMembers]);   

    if (isLoading) {
        return <Spinner />
    }
    else return (
        
        <div className="club-details">
        <h1>{club.name}</h1>
        <div className="club-logo">
            {addThumbnail(club)}
        </div>
        { creator && <div className="creator">
            <h2>{`Creator: ${creator.first_name} ${creator.last_name}`}</h2>
        </div>}
        <div className="description">
            <h2>Description:</h2>
            <p>{club.description}</p>
        </div>
        <div className="members">
            <h2>Current Members:</h2>
            <ul>
                {addMembers(members)}
            </ul>
        </div>
    </div>
    );
  };
  
  export default ClubView;