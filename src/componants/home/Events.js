import React, { useEffect, useRef } from 'react';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eventImage from '../../img/upload/event.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// Sample data
const data = [
  {
    event_image: eventImage,
    event_name: 'AI in Modern Education',
    event_date: '2024-11-20',
    event_time: '14:00',
    description: 'Explore how AI is transforming modern education and learn about latest tools and techniques.',
    ins_img: eventImage,
    instructor: 'Dr. Jane Smith',
    Level: 'Intermediate',
    Language: 'English',
    duration: '3 hours',
    skill1: 'AI Integration',
    skill2: 'Educational Technology',
    skill3: 'Curriculum Design',
  },
  {
    event_image: eventImage,
    event_name: 'Web Development Bootcamp',
    event_date: '2024-12-05',
    event_time: '10:00',
    description: 'A comprehensive bootcamp covering the fundamentals of web development using modern frameworks.',
    ins_img: eventImage,
    instructor: 'John Doe',
    Level: 'Beginner',
    Language: 'English',
    duration: '5 hours',
    skill1: 'HTML/CSS/Basics',
    skill2: 'JavaScript',
    skill3: 'Responsive Design',
  },
  {
    event_image: eventImage,
    event_name: 'Data Science Workshop',
    event_date: '2024-12-15',
    event_time: '09:00',
    description: 'Dive into the world of data science with hands-on exercises and real-world case studies.',
    ins_img: eventImage,
    instructor: 'Emily Johnson',
    Level: 'Advanced',
    Language: 'English',
    duration: '4 hours',
    skill1: 'Data Analysis',
    skill2: 'Machine Learning',
    skill3: 'Python Programming',
  },
  {
    event_image: eventImage,
    event_name: 'Cybersecurity Fundamentals',
    event_date: '2024-12-22',
    event_time: '13:00',
    description: 'Learn the basics of cybersecurity and how to protect your digital assets from threats.',
    ins_img: eventImage,
    instructor: 'Michael Brown',
    Level: 'Beginner',
    Language: 'English',
    duration: '2 hours',
    skill1: 'Network Security',
    skill2: 'Threat Detection',
    skill3: 'Incident Response',
  },
];

function Events() {
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

  const carouselItems = data.map(event => ({
    imgSrc: event.event_image,
    title: `Event: ${event.event_name}`,
    subtitle: event.description,
    description: `Date: ${event.event_date}, Time: ${event.event_time}`,
    button1Text: "Read More",
    button1Link: "/about",
    button2Text: "Join Now",
    button2Link: "/eventForms",
    titleColor: "blue"
  }));

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

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
                    <h5
                      className="text-uppercase mb-3"
                      style={{ color: item.titleColor, fontWeight: 'bold', fontSize: '1.5rem' }}
                      data-aos="fade-in" // AOS animation class
                    >
                      {item.title}
                    </h5>
                    <h1
                      className="text-white"
                      style={{ fontWeight: 'bold', fontSize: '3rem' }}
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
        <button className="btn btn-nav btn-primary me-2" onClick={goToPrev} style={{ fontSize: '2rem', padding: '10px 20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none' }}>
          &lt;
        </button>
        <button className="btn btn-nav btn-primary" onClick={goToNext} style={{ fontSize: '2rem', padding: '10px 20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none' }}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Events;
