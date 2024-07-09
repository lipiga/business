import React from 'react'
import './TextSection.css'
import ScrollAnimation from 'react-animate-on-scroll'

const TextSection = () => {
  return (
    <div className='text-section'>
      <ScrollAnimation animateIn='slideInUp'>
        <h2>studio7</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn='slideInUp'>
        <p>Studio7, a dynamic and innovative company founded on July 7, 2024. We specialize in providing
        cutting-edge designing, development, and marketing solutions tailored to help businesses succeed in the digita age.
        Our mission is to empower our clients by transforming their ideas into impactful digita experience.
        We believe in a collaborative approach, working closely with our clients to understand their unique needs and goals.
        Our commitment to innovation, quality, and client satisfaction sets us apart, ensuring that each project
        we undertake drives success and growth for your business.
        Join us at Studio7 and let's create something extraordinary together.</p>
    </ScrollAnimation>
    </div>
  )
}

export default TextSection