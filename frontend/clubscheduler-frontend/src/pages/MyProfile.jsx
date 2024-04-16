import React, { useEffect } from "react"
import { useSelector } from "react-redux"

export default function MyProfile() {

    const {userInfo} = useSelector( (state) => state.auth)

    useEffect(() => {
    }, [])

    return (
        <div className="container">
             <h1>Hello, {userInfo.first_name} {userInfo.last_name} </h1>
        </div>
    )
}