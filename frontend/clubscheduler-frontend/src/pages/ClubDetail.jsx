import React from 'react'
import { useParams, Link, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from "../components/Spinner"
import { fetchClubDetails } from '../features/clubs/clubsSlice';

function ClubDetail(){

    const {pk}  = useParams()
    const { user } = useSelector(state => state.auth)
    const { currentClub, status, error } = useSelector(state => state.clubs)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
          // get club details
          dispatch(fetchClubDetails(pk))
        }
        else {
          toast.error('Please login to view clubs')
          navigate('/login')
        }

        if (error) { 
            toast.error(error)
        }
    
      }, [dispatch, navigate, user])

    return (
        <h1>Club Detail {pk} </h1>
    );
}   

export default ClubDetail