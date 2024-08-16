import React from 'react'
import  './About.css '
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='' className="about-img"/>
        <img src={play_icon} alt='' className="about-img"/>

      </div>
      <div className="about-right"></div>
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nuturing Tomorrow's Leaders Today</h2>
      <p>Embark on a tranformative educational journey with our university's comprehensive education programs
        . Our cutting-edge curriculum is designed to empower students with the knowledge , skills and expriences needed to excel in the dynamic field of education 
      </p>
      <p>
        With a focus on innovation, hands on learning and persolized mentorship our programs prepare aspiring educators to make a meaningfull impact in classrooms schools and communities
      </p>
    </div>
  )
}

export default About
