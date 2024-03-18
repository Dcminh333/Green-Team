import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import { BiLogInCircle } from "react-icons/bi"

const ResetPassword = () => {

    const [formData, setFormData] = useState({
        "email": "",
    })

    const { email } = formData

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email
        }

    }

    return (
        <>
            <div className="container auth__container">
                <form className="auth__form">
                    <h2 className="main__title">Reset Password <BiLogInCircle /></h2>
                    <input type="text"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />

                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Reset Password</button>
                </form>
            </div>
        </>
    )
}

export default ResetPassword