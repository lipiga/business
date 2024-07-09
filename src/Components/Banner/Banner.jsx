import React from 'react'
import './Banner.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Banner = () => {
  return (
    <div className='banner'>
    <ScrollAnimation animateIn='slideInLeft'>
        <h2>Studio 7</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn='slideInRight'>
          <p>Innovative solutions in designing, development, and marketing.  Founded in 2024, we help businesses
              thrive in the digital age</p>
      </ScrollAnimation>
    </div>
  )
}

export default Banner