import React from 'react'
import './ServiceCard.css'
import { AiOutlineDesktop } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

const ServiceCard = () => {
    
  return (
    <div className='service-card'>
        <h2>our services</h2>
        <p>Transforming ideas into impactful digital experiences</p>
          <ScrollAnimation animateIn="fadeIn">
              <div className='card-container'>
                  <div id='card' className='card'>
                      <h2>Designing</h2>
                      <p>Transform your brand with our creative logo, poster, thumbnail and Business card design services.
                          We craft visually stunning and user-friendly designs that captivate and engage</p>
                      <MdDesignServices className='icon' />
                      
                  </div>
                  <div className='card'>
                      <h2>Development</h2>
                      <p>Build your digital presence with our static and dynamic web development services. We create robust, scalable, and customized
                          solutions tailored to your business needs.</p>
                      <AiOutlineDesktop className='icon' />
                      
                  </div>
                  <div className='card'>
                      <h2>Marketing</h2>
                      <p>Boost your brand's visibility with our comprehensive digital marketing strategies.
                          From SEO to social media, we drive growth and engagement for your business. </p>
                      <HiUserGroup className='icon' />
                      
                  </div>
              </div>
          </ScrollAnimation>
        
    </div>
  )
}

export default ServiceCard