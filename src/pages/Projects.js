import React from 'react'
import Navbar from '../componants/projects/Navbar'
import ProjetHeader from '../componants/projects/Header'
import Footer from '../componants/home/Footer'
import ApplyAsMember from '../componants/projects/Apply'
import LearningHub from '../componants/projects/Learning'
import How from '../componants/projects/How'
import MemberRequirements from '../componants/projects/Require'

function Projects() {
  return (
    <>
        <Navbar/>
        <ProjetHeader/>
        <ApplyAsMember/>
        <LearningHub/>
        <How/>
        <MemberRequirements/>
        <Footer/>
    </>
  )
}

export default Projects;
