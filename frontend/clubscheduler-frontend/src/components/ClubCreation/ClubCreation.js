import { useEffect, useState } from "react";
import React from "react";
import { BiUser } from 'react-icons/bi'

const Club = () => {

    const [formData, setFormData] = useState({
        "club_name": "",
        "club_descript": "",
        "club_type": "",

    })}


    const {club_name, club_descript, Category } = formData

    return (
        <>
            <div className="container auth__container">
                <form className="auth__form">
                    <h2 className="main__title">Create Club <BiUser /> </h2>

                    <input type="text"
                        placeholder="Club Name"
                        name="club_name"
                        required
                    />

                    <input type="text"
                        placeholder="Club Description"
                        name="club_descript"
                        required
                    />


                    <button className="btn btn-primary" type="submit" onClick="">Create Club</button>
                </form>
            </div>
        </>
    )


export default Club;