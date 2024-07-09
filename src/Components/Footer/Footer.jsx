import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
            <img src={logo} />
            <hr/>
        <div className='footer-content'>
            <div className='about-us'>
            <h1>About Us</h1>
                <p>Innovative solutions in designing, development, and marketing.  Founded in 2024, we help businesses
                thrive in the digital age.</p>
            </div>
            <div className='quick-links'>
            <h1>Quick Links</h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='contact'>
                <h1>Contact</h1>
                <p>+91 88385 53083</p>
                <p>studio7digitals@gmail.com</p>
                <h1>Social Links</h1>
                <ul>
                      <RiFacebookCircleLine className='social-icons' />
                      <IoLogoInstagram className='social-icons'/>
                      <AiOutlineYoutube className='social-icons'/>
                </ul>
            </div>
        </div>
        <hr/>
          <p className='copy-right'>Copyright © 2024 Studio7. All rights reserved.</p>
    </div>
  )
}

export default Footer