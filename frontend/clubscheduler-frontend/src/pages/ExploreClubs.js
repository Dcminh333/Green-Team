import { useNavigate } from "react-router-dom"
import React from "react"

export default function ExploreClubs() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/create-club")
    }

    return (
        <>
        <div className="container">
            <h1>Explore Clubs</h1>
            <button className="btn btn-primary" onClick={handleClick}> 
                Create a Club
            </button>
        </div>
        
        </>

    )

}