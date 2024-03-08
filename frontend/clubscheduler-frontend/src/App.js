import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import MyCalendar from './MyCalendar';
import ExploreClubs from './ExploreClubs';
import ContactUs from './ContactUs';
import MyProfile from './MyProfile';

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = Home
      break
      case "/My%20Calendar":
        Component = MyCalendar
        break
        case "/Explore%20Clubs":
          Component = ExploreClubs
          break
          case "/Contact%20Us":
            Component = ContactUs
            break
            case "/My%20Profile":
              Component = MyProfile
              break

  }
  return (
  <>
    <Navbar />
    <div className="container">
    <Component />
    </div>
  </>
  );
}

export default App;