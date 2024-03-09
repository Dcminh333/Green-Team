import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import MyCalendar from './pages/MyCalendar';
import ExploreClubs from './pages/ExploreClubs';
import ContactUs from './pages/ContactUs';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/calendar" element={<MyCalendar />}/>
            <Route path="/explore" element={<ExploreClubs />}/>
            <Route path="/contact" element={<ContactUs />}/>
            <Route path="/profile" element={<MyProfile />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Routes> 
      </div>
    </>
      
  );
}

export default App;