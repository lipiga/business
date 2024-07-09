import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Nabar = () => {
    return(
        <div className='navbar'>
            <img src={logo} alt='' className='logo' />
            <div className='links'>
                <ul className='main-links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nabar