import React from 'react'
import Navbar from '../componants/home/Navbar'
import Footer from '../componants/home/Footer'
import Header from '../componants/courses/Header'
import Categorie from '../componants/home/Categorie'
import PopularCourses from '../componants/courses/Lessons'


function Courses() {
  return (
    <>
        <Navbar activePage="courses" />
        <Header/>
        <Categorie/>
        <PopularCourses/>
        <Footer/>
    </>
  )
}

export default Courses