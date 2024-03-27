import { useEffect, useState } from "react";
import React from "react";
import { BiUser } from 'react-icons/bi'
import styled from 'styled-components';

const ClubCreation = () => {

    const [formData, setFormData] = useState({
        "club_name": "",
        "club_descript": "",
        "club_type": "",

    })

    const {club_name, club_descript, Category } = formData

    return (
        <>
            <div className="container auth__clubcontainer">
                <form className="auth__clubform">
                    <h2 className="main__title">Create Club <BiUser /> </h2>

                    <input type="text"
                        placeholder="Club Name"
                        name="club_name"
                        required
                    />

                    <textarea type="text"
                        placeholder="Club Description"
                        name="club_descript"
                        required
                    />

                 
                    <h3>Club Type</h3>
                    <select className="">
                    <option value="1">Academic</option>
                    <option value="2">Social</option>
                    <option value="3">Sports</option>
                    <option value="4">Cultural</option>
                    <option value="5">Professional</option>

                    </select> 

                
                    <button className="btn btn-primary" type="submit" onClick="">Create Club</button>
                </form>
            </div>
        </>
    )
}


export default ClubCreation;