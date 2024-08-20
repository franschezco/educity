import React, { useEffect, useRef } from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (aboutLeftRef.current) {
      observer.observe(aboutLeftRef.current);
    }
    
    if (aboutRightRef.current) {
      observer.observe(aboutRightRef.current);
    }

    return () => {
      if (aboutLeftRef.current) {
        observer.unobserve(aboutLeftRef.current);
      }
      
      if (aboutRightRef.current) {
        observer.unobserve(aboutRightRef.current);
      }
    };
  }, []);

  return (
    <div className='about'>
      <div className="about-left" ref={aboutLeftRef}>
        <img src={about_img} alt="About" className="about-img" />
        <img src={play_icon} alt="Play" className="play-icon" />
      </div>
      <div className="about-right" ref={aboutRightRef}>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's comprehensive education programs.
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
