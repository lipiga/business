import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,  Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import "animate.css/animate.compat.css"
import ContactSec from './Components/ContactSec/ContactSec'
import Footer from './Components/Footer/Footer'
import Services from './Pages/Services/Services'
import ContactUs from './Pages/ContactUs/ContactUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<ContactUs />}/>
      </Routes>
      <ContactSec />
      <Footer/>
    </div>
  )
}

export default App