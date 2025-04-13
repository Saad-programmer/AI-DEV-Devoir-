import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';

import image1 from '../../img/AI.png';
import image2 from '../../img/Dev.png';
import image3 from '../../img/Data.jpg';
import image4 from '../../img/cyber.png';
import imageI from '../../img/banner-2.jpg';




function SectionEvents() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Simulate fetching events data
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchEvents = async () => {
      // Simulate an API call
      const data = [
        {
          event_image: image1,
          event_name: 'AI in Modern Education',
          event_date: '2024-11-20',
          event_time: '14:00',
          description: 'Explore how AI is transforming modern education and learn about  latest tools and techniques.',
          ins_img: imageI,
          instructor: 'Dr. Jane Smith',
          Level: 'Intermediate',
          Language: 'English',
          duration: '3 hours',
          skill1: 'AI Integration',
          skill2: 'Educational Technology',
          skill3: 'Curriculum Design',
        },
        {
          event_image: image2,
          event_name: 'Web Development Bootcamp',
          event_date: '2024-12-05',
          event_time: '10:00',
          description: 'A comprehensive bootcamp covering the fundamentals of web development using modern frameworks.      ',
          ins_img: imageI,
          instructor: 'John Doe',
          Level: 'Beginner',
          Language: 'English',
          duration: '5 hours',
          skill1: 'HTML/CSS/Basics',
          skill2: 'JavaScript',
          skill3: 'Responsive Design',
        },
        {
          event_image: image3,
          event_name: 'Data Science Workshop',
          event_date: '2024-12-15',
          event_time: '09:00',
          description: 'Dive into the world of data science with hands-on exercises and real-world case studies.',
          ins_img: imageI,
          instructor: 'Emily Johnson',
          Level: 'Advanced',
          Language: 'English',
          duration: '4 hours',
          skill1: 'Data Analysis',
          skill2: 'Machine Learning',
          skill3: 'Python Programming',
        },
        {
          event_image: image4,
          event_name: 'Cybersecurity Fundamentals',
          event_date: '2024-12-22',
          event_time: '13:00',
          description: 'Learn the basics of cybersecurity and how to protect your digital assets from threats.',
          ins_img: imageI,
          instructor: 'Michael Brown',
          Level: 'Beginner',
          Language: 'English',
          duration: '2 hours',
          skill1: 'Network Security',
          skill2: 'Threat Detection',
          skill3: 'Incident Response',
        },
      ];
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <h6 className="section-title bg-primary text-center px-3 py-1 text-white d-inline-block rounded" >Our Events</h6>
          <h1 className="mb-5" style={{ color: '#1e90ff', fontWeight: 'bold' }}>Discover Exciting Upcoming Events</h1>
        </div>
        <div className="row g-4 py-2">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={`${index * 100 + 100}`}>
                <div className="event-item shadow border rounded overflow-hidden position-relative">
                  <div className="position-relative event-image">
                    <img src={event.event_image} alt={event.event_name} style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
                    <div className="badge position-absolute top-0 start-0 m-3 px-2 py-1 bg-warning text-dark fw-bold rounded-pill"></div>
                  </div>
                  <div className="p-4">
                    <h5 className="mb-2">
                      <a href="#" className="text-dark text-decoration-none event-title">
                        {event.event_name}
                      </a>
                    </h5>
                    <small className="text-muted">
                      <i className="fa fa-calendar-alt me-2"></i>{new Date(event.event_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} |
                      <i className="fa fa-clock me-2"></i>{event.event_time}
                    </small>
                    <p className="mt-3 text-secondary event-description">{event.description.substring(0, 100)}...</p>
                  </div>
                  <div className="d-flex align-items-center bg-light p-3 border-top">
                    <img src={event.ins_img} alt="Instructor" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                    <span className="text-muted small">{event.instructor}</span>
                  </div>
                  <div className="d-flex justify-content-between p-3 border-top">
                    <span><i className="fa fa-user-alt me-2"></i>{event.Level}</span>
                    <span><i className="fa fa-language me-2"></i>{event.Language}</span>
                    <span><i className="fa fa-clock me-2"></i>{event.duration}</span>
                  </div>
                  <div className="d-flex justify-content-between p-3 bg-primary text-white border-top">
                    <span className="fw-light">{event.skill1}, {event.skill2}, {event.skill3}</span>
                    <a href="#" className="text-white text-decoration-none fw-bold">Learn More
                      <i className="fa fa-chevron-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No events available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionEvents;
