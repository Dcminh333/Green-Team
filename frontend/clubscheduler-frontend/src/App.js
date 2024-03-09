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

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/calendar" element={<MyCalendar />}/>
            <Route exact path="/explore" element={<ExploreClubs />}/>
            <Route exact path="/contact" element={<ContactUs />}/>
            <Route exact path="/profile" element={<MyProfile />}/>
          </Routes> 
      </div>
    </>
      
  );
}

export default App;