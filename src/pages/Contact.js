import React from 'react'
import ContactHeader from '../componants/contact/Header'
import Navbar from '../componants/contact/Navbar'
import Footer from '../componants/home/Footer'
import ContactUs from '../componants/contact/Content'

function Contact() {
  return (
    <>
        <Navbar/>
        <ContactHeader/> 
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default Contact
