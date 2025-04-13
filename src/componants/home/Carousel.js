import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import carousel from '../../img/carousel-1.jpg';
import carousel2 from '../../img/carousel-2.jpg';
import { Link } from 'react-router-dom';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Carousel() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const sliderRef = useRef(null);

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false, // Disable default arrows
  };

  const carouselItems = [
    {
      imgSrc: carousel,
      title: "E-learning platform from AI&DEV",
      subtitle: "Learn Job ready skills from our courses",
      description: "Explore a wide range of courses designed to enhance your expertise",
      button1Text: "Read More",
      button1Link: "/about",
      button2Text: "Join Now",
      button2Link: "/login",
      titleColor: "blue"
    },
    {
      imgSrc: carousel2,
      title: "Welcome to AI&DEV",
      subtitle: "Be a Part Of OUR Community",
      description: "Engage with interactive activities, workshops, and projects.",
      button1Text: "Read More",
      button1Link: "/about",
      button2Text: "Join Now",
      button2Link: "/login",
      titleColor: "#5a08dd"
    }
  ];

  // const goToNext = () => {
  //   sliderRef.current.slickNext();
  // };

  // const goToPrev = () => {
  //   sliderRef.current.slickPrev();
  // };

  return (
    <div className="container-fluid p-0 mb-4 position-relative">
      <Slider {...settings} ref={sliderRef} className="owl-carousel header-carousel">
        {carouselItems.map((item, index) => (
          <div className="owl-carousel-item position-relative" key={index}>
            <img
              className="img-fluid carousel-image"
              src={item.imgSrc}
              alt={`carousel ${index + 1}`}
              style={{ height: "100%" }}
              data-aos="fade-up" // AOS animation class
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(24, 29, 56, .7)" }}
              data-aos="fade-up" // AOS animation class
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h3
                      className="text-uppercase mb-3"
                      style={{ color: item.titleColor, fontSize: '1.5rem' }}
                      data-aos="fade-up" // AOS animation class
                    >
                      {item.title}
                    </h3>
                    <h1
                      className="text-white"
                      style={{ fontSize: '3rem', lineHeight: '1' }}
                      data-aos="fade-up"
                    >
                      {item.subtitle}
                    </h1>
                    <p
                      className="text-white mb-4 pb-2"
                      style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                      data-aos="fade-up"
                    >
                      {item.description}
                    </p>
                    <Link
                      to={item.button1Link}
                      className="btn btn-primary py-md-3 px-md-5 me-3"
                      style={{ fontWeight: 'bold' }}
                      data-aos="fade-up" // AOS animation class
                    >
                      {item.button1Text}
                    </Link>
                    <Link
                      to={item.button2Link}
                      className="btn btn-light py-md-3 px-md-5"
                      style={{ fontWeight: 'bold' }}
                      data-aos="fade-up" // AOS animation class
                    >
                      {item.button2Text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="carousel-navigation position-absolute" style={{ top: '50%', right: '20px', transform: 'translateY(-50%)' }}>
        
      </div>
    </div>
  );
}

export default Carousel;
