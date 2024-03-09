import { useEffect, useState } from "react";
import React from "react";
import { BiUser } from 'react-icons/bi'

const Register = () => {

    const [formData, setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "re_password": "",
    })

    const { first_name, last_name, email, password, re_password } = formData

    return (
        <>
            <div className="container auth__container">
                <form className="auth__form">
                    <h2 className="main__title">Register <BiUser /> </h2>

                    <input type="text"
                        placeholder="First Name"
                        name="first_name"
                        required
                    />
                    <input type="text"
                        placeholder="Last Name"
                        name="last_name"
                        required
                    />
                    <input type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        required
                    />
                    <input type="password"
                        placeholder="Retype Password"
                        name="re_password"
                        required
                    />

                    <button className="btn btn-primary" type="submit" onClick="">Register</button>
                </form>
            </div>
        </>
    )
}

export default Register