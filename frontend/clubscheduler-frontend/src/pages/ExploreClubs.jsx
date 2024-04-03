import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from "../components/Spinner"
import { fetchAllClubs } from '../features/clubs/clubsSlice'
import ClubCard from '../components/Clubs/ClubCard/ClubCard'

const ExploreClubs = () => {

  const { clubs, status, error } = useSelector(state => state.clubs)
  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const clubCards = [];
  for (let club of clubs) {
    clubCards.push(ClubCard({club}))
  }

  useEffect(() => {

    if (!user) {
      toast.error('Please login to view clubs')
      navigate('/login')
    }
    dispatch(fetchAllClubs())

    
  }, [dispatch])

  return (
    <>
        <div className='container'>
          <div className='club-view'>
            {clubCards}
          </div>
        </div>
    </>
  )
}

export default ExploreClubs