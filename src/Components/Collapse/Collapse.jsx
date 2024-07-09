import React from 'react'
import './Collapse.css'
import collapse1 from '../../assets/collapse1.jpg'
import collapse2 from '../../assets/collapse2.jpg'
import collapse3 from '../../assets/collapse3.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

const Collapse = () => {
  return (
    <div className='collapse'>
    <ScrollAnimation animateIn='slideInLeft'>
        <img src={collapse1} />
      </ScrollAnimation>
        <div className='sub-collapse'>
        <ScrollAnimation animateIn='slideInRight'>
            <img src={collapse2} />
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInUp'>
              <img src={collapse3} />
        </ScrollAnimation>
        </div>
    </div>
  )
}

export default Collapse