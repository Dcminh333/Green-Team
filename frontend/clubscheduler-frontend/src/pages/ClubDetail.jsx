import React from 'react'
import { useParams, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from "../components/Spinner"
import { fetchClubDetails } from '../features/clubs/clubsSlice';
import ClubView from '../components/Clubs/ClubView/ClubView';

function ClubDetail(){

    const {pk}  = useParams()
    const { user } = useSelector(state => state.auth)
    const { currentClub, error, status } = useSelector(state => state.clubs)

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
        <>
        {status === "loading" 
        ? 
        <Spinner /> 
        :
        <ClubView club={currentClub} />
        }
        </>
    );
}   

export default ClubDetail