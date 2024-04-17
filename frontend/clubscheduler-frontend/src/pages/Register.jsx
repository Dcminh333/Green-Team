import { useEffect, useState } from "react";
import React from "react";
import { BiUser } from 'react-icons/bi'
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from "../features/auth/authSlice";
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner'

const Register = () => {

    const [formData, setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "re_password": "",
    })

    const { first_name, last_name, email, password, re_password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // UPDATE ERROR MESSAGING SYSTEM !!!!

        if (isError) {
            console.log(message);
        }

        else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password
            }
            dispatch(register(userData))
        }
    }


    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (isSuccess) {
            navigate("/")
            toast.success("An activation email has been sent to your email. Please check your email")
        }

        dispatch(reset())

    }, [isError, isSuccess, user, message, navigate, dispatch])

    return (
        <>
            <div className="container auth__container">
                <form className="auth__form">
                    {isLoading && <Spinner />}  
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