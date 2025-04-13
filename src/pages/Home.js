import React from 'react';
import Navbar from '../componants/home/Navbar';
import Carousel from '../componants/home/Carousel';
import Events from '../componants/home/Events';
import Service from '../componants/home/Service';
import Info from '../componants/home/Info';
import Banner from '../componants/home/Banner';
import Categorie from '../componants/home/Categorie';
import Banner2 from '../componants/home/Banner2';
import Faq from '../componants/home/Faq';
import Footer from '../componants/home/Footer';



const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Events/>
      <Service/>
      <Info/>
      <Banner/>
      <Categorie/>
      <Banner2/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Home;
