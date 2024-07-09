import React from 'react'
import './CardLink.css'
import cardlink1 from '../../assets/cardlink1.jpg'
import cardlink2 from '../../assets/cardlink2.jpg'
import cardlink3 from '../../assets/cardlink3.jpg'
import ScrollAnimation from 'react-animate-on-scroll';

const CardLink = () => {
  return (
    <div className='cardlink'>
    <ScrollAnimation animateIn="slideInLeft">
        <div className='card'>
              <img className='card-img' src={cardlink1} />
              <div className='card-text'>
                  <h2>Our Services</h2>
                  <h2>How Can We Help You</h2>
                  <a>explore our services</a>
              </div>
        </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="slideInUp">
          <div className='card'>
              <img className='card-img' src={cardlink2} />
              <div className='card-text'>
                  <h2>Our Promise</h2>
                  <h2>What Our Vision?</h2>
                  <a>vision and mission</a>
              </div>
          </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="slideInRight">
          <div className='card'>
              <img className='card-img' src={cardlink3} />
              <div className='card-text'>
                  <h2>Our Expertise</h2>
                  <h2>Why Partner With Us?</h2>
                  <a>why choose us</a>
              </div>
          </div>
    </ScrollAnimation>
    </div>
  )
}

export default CardLink