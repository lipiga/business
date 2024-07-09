import React from 'react'
import './AboutCard.css'
import { FaLaptopCode } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';



const AboutCard = () => {
  return (
      <div className='service-card'>
          <ScrollAnimation animateIn="fadeIn">
              <div className='card-container'>
                  <div id='card' className='card'>
                      <h2>Why Choose Us?</h2>
                      <FaPersonCircleQuestion className='icon' />
                      <p>At Studio7, we stand out as your trusted partner for digital success. 
                      With a dedicated focus on creativity and innovation, we bring your vision to life through 
                      tailored solutions that exceed expectations. Our commitment to quality, collaboration, and client 
                      satisfaction ensures that every project is delivered with precision and care. Choose Studio7 for expertise, 
                      reliability, and a personalized approach that drives measurable results and fosters long-term partnerships.</p>
                      
                  </div>
                  <div className='card'>
                      <h2>What we do?</h2>
                      <FaLaptopCode className='icon' />
                      <p>Studio7 specializes in comprehensive digital solutions encompassing designing, marketing, 
                      and web development. From crafting compelling visual identities to executing strategic marketing 
                      campaigns and building robust web applications, we combine creativity with technical expertise 
                      to meet your unique business needs. Whether you're launching a new venture or seeking to enhance your 
                      online presence, we provide the tools and strategies to help you achieve your goals effectively and efficiently.</p>
                      
                      
                  </div>
                  <div className='card'>
                      <h2>Our Mission</h2>
                      <CgNotes className='icon' />
                      <p>At Studio7, our mission is to empower businesses and brands through innovative digital 
                      experiences. We are driven by a commitment to creativity, integrity, and continuous improvement. Our goal 
                      is to deliver exceptional value to our clients by leveraging cutting-edge technologies and strategic insights.
                       We strive to build lasting relationships based on trust, transparency, and mutual success. With Studio7, you can expect dedicated support, innovative 
                      solutions, and a partnership focused on achieving your business objectives.</p>
                      
                  </div>
              </div>
          </ScrollAnimation>

      </div>
  )
}

export default AboutCard