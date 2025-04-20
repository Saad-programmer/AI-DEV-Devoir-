import React from 'react'
import ContactHeader from '../componants/contact/Header'
import Navbar from '../componants/home/Navbar'
import Footer from '../componants/home/Footer'
import ContactUs from '../componants/contact/Content'

function Contact() {
  return (
    <>
        <Navbar activePage="contact" />
        <ContactHeader/> 
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default Contact
