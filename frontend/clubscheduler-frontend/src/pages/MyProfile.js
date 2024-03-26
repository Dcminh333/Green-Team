import React from "react"
import { useSelector } from "react-redux"

export default function MyProfile() {

    const {userInfo} = useSelector( (state) => state.auth)


    return <h1>My Profile</h1>
}