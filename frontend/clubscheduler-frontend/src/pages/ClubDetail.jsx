import React from 'react'
import { useParams } from 'react-router-dom';

function ClubDetail(){

    const {pk}  = useParams()

    return (
        <h1>Club Detail {pk} </h1>
    );
}   

export default ClubDetail