import { useEffect } from 'react'
import { BiUserCheck } from 'react-icons/bi'
import { toast } from 'react-toastify'

const Activate = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        toast.success("Your account has been activated! You can login now")
    }

    return (
        <div>
            <div className="container auth__container">
                <h1 className="main__title">Activate Account <BiUserCheck /> </h1>

                <button className="btn btn-accent btn-activate-account" type="submit" onClick={handleSubmit}>Activate Account</button>
            </div>
        </div>
    )
}

export default Activate