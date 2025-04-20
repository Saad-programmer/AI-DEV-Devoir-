import React from 'react';
import Navbar from '../componants/home/Navbar';
import Footer from '../componants/home/Footer';
import EventHeader from '../componants/events/Header';
import Categories from '../componants/events/Categories';
import SectionEvents from '../componants/events/Event';


function Events(){
  return (
    <div>
      <Navbar activePage="events" />
      <EventHeader/>
      <Categories/>
      <SectionEvents/>
      <Footer/>
    </div>
  );
};

export default Events;
