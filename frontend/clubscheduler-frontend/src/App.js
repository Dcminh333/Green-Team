import React from 'react';
import {Routes,Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import MyCalendar from './pages/MyCalendar';
import ExploreClubs from './pages/ExploreClubs';
import ContactUs from './pages/ContactUs';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Activate from './pages/Activate';
import NotFound404 from './pages/NotFound404';
import ClubEvents from './pages/ClubEvents';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/calendar" element={<MyCalendar />}/>
            <Route path="/explore" element={<ExploreClubs />}/>
            <Route path="/contact" element={<ContactUs />}/>
            <Route path="/profile" element={<MyProfile />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/reset-password" element={<ResetPassword />}/>
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />}/>
            <Route path="/activate/:uid/:token" element={<Activate />}/>
            <Route path="*" element={<NotFound404 />}/>
            <Route path="/clubevents" element={<ClubEvents />}/>
          </Routes> 
    </>
      
  );
}

export default App;