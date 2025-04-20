import React from 'react'
import Navbar from '../componants/home/Navbar'
import EventForm from '../componants/eventForms/EventForm'
import Footer from '../componants/login/Footer'

function Event_sub() {
  return (
    <>
      <Navbar activePage="events" />
      <EventForm/>
      <Footer/>
    </>
  )
}

export default Event_sub
