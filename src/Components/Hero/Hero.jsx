import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-top'>
        <div className='hero'>
              <div className='slide1 fade'>
                  <h2 className='heading'>Elevate your brand with creative excellence</h2>
                  <p className='body-text'>Transforming brands through innovative design and digital marketing solutions</p>
              </div>
              <div className='slide2 fade'>
                  <h2 className='heading'>Empowering brands through innovative design and marketing</h2>
                  <p className='body-text'>Combining creativity with strategic marketing to unlock your brand's full potential</p>
              </div>
              <div className='slide3 fade'>
                  <h2 className='heading'>Transforming ideas into impactful designs</h2>
                  <p className='body-text'>Crafting visually stunning designs that effectively communicate your brand message</p>
              </div>
        </div>
    </div>
  )
}

export default Hero