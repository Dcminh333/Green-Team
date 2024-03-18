import { useEffect, useState } from "react";
import React from "react";
import { BiUser } from 'react-icons/bi'
import { toast } from "react-toastify";

const Register = () => {

    const [formData, setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "re_password": "",
    })
    const { first_name, last_name, email, password, re_password } = formData

    const handleChange = (e) => {
        setFormData( (prev) => ({
            ...prev,
            [e.target.name]: e.target.value
            }) 
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== re_password) {
            toast.error("passwords do not match")
        }
    }

    return (
        <>
            <div className="container auth__container">
                <form className="auth__form">
                    <h2 className="main__title">Register <BiUser /> </h2>
                    <input type="text"
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleChange}
                        value={first_name}
                        required
                    />
                    <input type="text"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleChange}
                        value={last_name}
                        required
                    />
                    <input type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <input type="password"
                        placeholder="Retype Password"
                        name="re_password"
                        onChange={handleChange}
                        value={re_password}
                        required
                    />

                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register