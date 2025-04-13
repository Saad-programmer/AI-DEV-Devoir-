import React from 'react';
import './style/index.css';
import './style/style.css';
import './style/style2.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Events from './pages/Events';
import Courses from './pages/Courses';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import Event_sub from './pages/Event_sub';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<Team />} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/inscription' element={<Inscription/>}/>
        <Route path='/eventForms' element={<Event_sub/>}/>
      </Routes>
    </>
  );
};

export default App;
