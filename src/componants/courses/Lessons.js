import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import course1 from '../../img/course-1.jpg';
import course2 from '../../img/course-2.jpg';
import course3 from '../../img/course-3.jpg';
import course4 from '../../img/course-4.jpg';
import course5 from '../../img/course-5.jpg';
import course6 from '../../img/course-6.jpg';
import course7 from '../../img/course-7.jpg';
import course8 from '../../img/course-8.jpg';
import course9 from '../../img/course-9.jpg';
import course10 from '../../img/course-10.jpg';
import course11 from '../../img/course-11.jpg';
import course12 from '../../img/course-12.png';

function PopularCourses() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Simulate fetching courses data
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchCourses = async () => {
      // Simulate an API call
      const data = [
        {
          image: course1,
          title: 'HTML Course for Beginners',
          description: 'Learn the basics of HTML and start building web pages.',
          rating: 4.55,
          learners: '5.8L+',
          level: 'Beginner',
          duration: '2.0 Hrs',
          popularity: 'High',
        },
        {
          image: course2,
          title: 'Front End Development - CSS',
          description: 'Master CSS to create beautiful and responsive web designs.',
          rating: 4.55,
          learners: '5.2L+',
          level: 'Beginner',
          duration: '4.0 Hrs',
          popularity: 'High',
        },
        {
          image: course3,
          title: 'Introduction to JavaScript',
          description: 'Get started with JavaScript and learn to add interactivity to your web pages.',
          rating: 4.46,
          learners: '76L+',
          level: 'Beginner',
          duration: '2.5 Hrs',
          popularity: 'High',
        },
        {
          image: course4,
          title: 'Python Programming',
          description: 'Learn Python programming from scratch and build various applications.',
          rating: 3.54,
          learners: '3.3L+',
          level: 'Beginner',
          duration: '3.0 Hrs',
          popularity: 'High',
        },
        {
          image: course5,
          title: 'SQL for Data Science',
          description: 'Learn SQL to manage and analyze data efficiently.',
          rating: 4.54,
          learners: '1.3L+',
          level: 'Intermediate',
          duration: '5.0 Hrs',
          popularity: 'High',
        },
        {
          image: course6,
          title: 'ChatGPT for Beginners',
          description: 'Understand the basics of ChatGPT and how to use it effectively.',
          rating: 3.55,
          learners: '3.5L+',
          level: 'Beginner',
          duration: '4.5 Hrs',
          popularity: 'High',
        },
        {
          image: course7,
          title: 'AWS for Beginners',
          description: 'Get started with AWS and learn to deploy applications in the cloud.',
          rating: 4.53,
          learners: '1L+',
          level: 'Beginner',
          duration: '3.0 Hrs',
          popularity: 'High',
        },
        {
          image: course8,
          title: 'Microsoft Azure Essentials',
          description: 'Learn the basics of Microsoft Azure and its services.',
          rating: 4.64,
          learners: '4.4L+',
          level: 'Intermediate',
          duration: '3.5 Hrs',
          popularity: 'High',
        },
        {
          image: course9,
          title: 'Introduction to MS Excel',
          description: 'Master Excel for data analysis and management.',
          rating: 4.6,
          learners: '4.2L+',
          level: 'Beginner',
          duration: '3.5 Hrs',
          popularity: 'High',
        },
        {
          image: course10,
          title: 'Statistics for Data Science',
          description: 'Learn statistical methods for data analysis.',
          rating: 4.55,
          learners: '5.3L+',
          level: 'Intermediate',
          duration: '2.5 Hrs',
          popularity: 'High',
        },
        {
          image: course11,
          title: 'Java Programming',
          description: 'Learn Java programming from scratch and build various applications.',
          rating: 4.45,
          learners: '5L+',
          level: 'Beginner',
          duration: '2.0 Hrs',
          popularity: 'High',
        },
        {
          image: course12,
          title: 'C for Beginners',
          description: 'Get started with C programming and learn the basics.',
          rating: 4.5,
          learners: '1.1L+',
          level: 'Beginner',
          duration: '1.5 Hrs',
          popularity: 'High',
        },
      ];
      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <h6 className="section-title bg-white text-center px-3">Popular Courses</h6>
          <h1 className="mb-5" style={{ color: 'rgba(0, 0, 255, 0.5)' }}>Explore new and trending free online courses</h1>
        </div>
        <div className="row g-4 py-2">
          {courses.map((course, index) => (
            <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={`${index * 100 + 100}`}>
              <div className="course-item shadow">
                <div className="position-relative overflow-hidden text-light image">
                  <img className="img-fluid" src={course.image} alt={course.title} />
                  <div
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '16px',
                      fontSize: '12px',
                      borderRadius: '3px',
                      backgroundColor: course.popularity === 'High' ? '#fb873f' : '#0ed44c',
                    }}
                    className="px-2 py-1 fw-bold text-uppercase"
                  >
                    {course.popularity}
                  </div>
                </div>
                <div className="p-2 pb-0">
                  <h5 className="mb-1">
                    <a href="#" className="text-dark">{course.title}</a>
                  </h5>
                </div>
                <div className="d-flex">
                  <small className="flex-fill text-center py-1 px-2">
                    <i className="fa fa-star text-warning me-2"></i>{course.rating}
                  </small>
                  <small className="flex-fill text-center py-1 px-2">
                    <i className="fa fa-user-graduate me-2"></i>{course.learners}
                  </small>
                  <small className="flex-fill text-center py-1 px-2">
                    <i className="fa fa-user me-2"></i>{course.level}
                  </small>
                </div>
                <div className="d-flex">
                  <small className="flex-fill text-left p-2 px-2">
                    <i className="fa fa-clock me-2"></i>{course.duration}
                  </small>
                  <small className="py-1 px-2 fw-bold fs-6 text-center">Popularity: {course.popularity}</small>
                  <small className="text-primary py-1 px-2 fw-bold fs-6" style={{ float: 'right' }}>
                    <a href="#">Enroll Now <i className="fa fa-chevron-right me-2 fs-10"></i></a>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
