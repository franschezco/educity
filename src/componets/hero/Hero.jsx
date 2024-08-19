import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import hero1 from '../../assets/hero-1.jpg';
import hero3 from '../../assets/hero-3.jpg';
import heroImage from '../../assets/hero.png'; // Add the new image import

const Hero = () => {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [currentHero, setCurrentHero] = useState(0); // Manage the current hero image
  const heroRef = useRef(null);

  // Intersection Observer to trigger animation on view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTrigger(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Change image and text every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationTrigger(false);
      setTimeout(() => {
        setCurrentHero(prev => (prev + 1) % 3); // Toggle between hero1, hero3, and heroImage
        setAnimationTrigger(true);
      }, 100); // Short delay to restart animation
    }, 10000); // 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const heroImages = [hero1, hero3, heroImage];
  const heroTexts = [
    {
      title: "We Ensure Better Education for a Better World",
      description: "Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education."
    },
    {
      title: "Transforming Lives Through Learning",
      description: "Explore our innovative programs and find out how we can help you achieve your educational and career goals."
    },
    {
      title: "Empowering Future Innovators",
      description: "Join us in fostering the next generation of leaders and innovators through our tailored educational experiences."
    }
  ];

  return (
    <div className='hero container' ref={heroRef} style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url(${heroImages[currentHero]})` }}>
      <div className={`hero-text ${animationTrigger ? 'animate' : ''}`}>
        <h1>{heroTexts[currentHero].title}</h1>
        <p>{heroTexts[currentHero].description}</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="Arrow Icon" /></button>
      </div>
    </div>
  );
};

export default Hero;
