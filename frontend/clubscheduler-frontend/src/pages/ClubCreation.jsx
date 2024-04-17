import { useEffect, useState } from "react";
import React from "react";
import { MdOutlineGroups } from "react-icons/md";
import styled from 'styled-components';

const ClubCreation = () => {

    const [formData, setFormData] = useState({
        "club_name": "",
        "club_descript": "",
        "club_type": "",
    })

    const {name, description, category } = formData

    return (
        <>
            <div className="container form_container">
                <form className="form">
                    <h2 className="main__title"> Create Club <MdOutlineGroups /> </h2>

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

                
                    <button className="btn btn-primary" type="submit" >Create Club</button>
                </form>
            </div>
        </>
    )
}


export default ClubCreation;