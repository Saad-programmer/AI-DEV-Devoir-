import React from 'react';
import Navbar from '../componants/about/Navbar';
import Footer from '../componants/home/Footer';
import Header from '../componants/about/Header';
import AboutSection from '../componants/about/Feedback';

const About = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <AboutSection/>
      <Footer/>
    </div>
  );
};

export default About;
