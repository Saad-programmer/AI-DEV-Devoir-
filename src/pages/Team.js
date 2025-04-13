import React from 'react'
import Navbar from '../componants/team/Navbar'
import Footer from '../componants/home/Footer'
import TeamHeader from '../componants/team/Header'
import TeamMembers from '../componants/team/Members'


function Team() {
  return (
    <>
        <Navbar/>
        <TeamHeader/>
        <TeamMembers/>
        <Footer/>
    </>
  )
}

export default Team
