import React from 'react'
import TitleSection from '../../Components/TitleSection/TitleSection'
import Banner from '../../Components/Banner/Banner'
import Collapse from '../../Components/Collapse/Collapse'
import TextSection from '../../Components/TextSection/TextSection'
import AboutCard from '../../Components/AboutCard/AboutCard'


const About = () => {
  return (
    <div>
        <TitleSection title="About Us" />
        <Banner />
        <Collapse />
        <TextSection />
        <AboutCard />
    </div>
  )
}

export default About