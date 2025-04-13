import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import profile from '../../img/profile.png';
import pro from '../../img/upload/pro.jpg';
import vice from '../../img/upload/vice.jpg';
import resp4 from '../../img/upload/resp4.jpg';
import resp3 from '../../img/upload/resp3.jpg';
import sec from '../../img/upload/sec.jpg';
import tr from '../../img/upload/tr.jpg';
import resp2 from '../../img/upload/resp2.jpg';
import resp from '../../img/upload/resp.jpg';
import design from '../../img/upload/design.jpg';

function TeamMembers() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Sanaa EL FILALI',
      role: 'Team Leader',
      image: profile,
      linkedin: 'https://www.linkedin.com/in/sanaa-el-filali-87816b8a/',
      email: 'mailto:sanaa.elfilali@univh2c.ma',
      github: 'https://github.com/elfilalis',
    },
    {
      name: 'Ikrame Ezzirague',
      role: 'President',
      image: pro,
      linkedin: 'https://www.linkedin.com/in/keerti-vishwakarma-8ba754243/',
      email: 'mailto:keertidvcorai@gmail.com',
      github: 'https://github.com/keerti1924',
    },
    {
      name: 'Hiba JANNANE',
      role: 'Vice-President',
      image: vice,
      linkedin: 'https://www.linkedin.com/in/member-3/',
      email: 'mailto:member3@example.com',
      github: 'https://github.com/member3',
    },
    {
      name: 'Hiba ADLIL',
      role: 'Event Manager',
      image: resp4,
      linkedin: 'https://www.linkedin.com/in/member-4/',
      email: 'mailto:member4@example.com',
      github: 'https://github.com/member4',
    },
    {
      name: 'Fatima-zahra ALAOUI',
      role: 'Responsible for Internal and External Relations',
      image: resp3,
      linkedin: 'https://www.linkedin.com/in/member-5/',
      email: 'mailto:member5@example.com',
      github: 'https://github.com/member5',
    },
    {
      name: 'Meriem SELMANE',
      role: 'Secretary General',
      image: sec,
      linkedin: 'https://www.linkedin.com/in/member-6/',
      email: 'mailto:member6@example.com',
      github: 'https://github.com/member6',
    },
    {
      name: 'Fatima Zahrae Er-raqi',
      role: 'Treasurer',
      image: tr,
      linkedin: 'https://www.linkedin.com/in/member-7/',
      email: 'mailto:member7@example.com',
      github: 'https://github.com/member7',
    },
    {
      name: 'Yassine IDRISSI MOUNTASSIR',
      role: 'Digital and Human Actions Manager',
      image: resp2,
      linkedin: 'https://www.linkedin.com/in/member-8/',
      email: 'mailto:member8@example.com',
      github: 'https://github.com/member8',
    },
    {
      name: 'Kaoutar MOTASSIM',
      role: 'Human Resources Manager',
      image: resp,
      linkedin: 'https://www.linkedin.com/in/member-9/',
      email: 'mailto:member9@example.com',
      github: 'https://github.com/member9',
    },
    {
      name: 'Mohamed ELMASMARI',
      role: 'Chief Design',
      image: design,
      linkedin: 'https://www.linkedin.com/in/member-3/',
      email: 'mailto:member3@example.com',
      github: 'https://github.com/member3',
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden text-center pt-5">
                  <img
                    className="img-fluid"
                    src={member.image}
                    alt={member.name}
                    style={{ height: '200px', width: '200px' }}
                  />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: '-23px' }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm-square btn-primary mx-1"
                      href={member.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm-square btn-primary mx-1"
                      href={member.email}
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm-square btn-primary mx-1"
                      href={member.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{member.name}</h5>
                  <small>{member.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
