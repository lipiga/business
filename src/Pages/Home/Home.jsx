import React from 'react'
import Hero from '../../Components/Hero/Hero'
import CompanyStory from '../../Components/CompanyStory/CompanyStory'
import CardLink from '../../Components/CardLink/CardLink'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'

const Home = () => {
  return (
    <div>
        <Hero />
        <CompanyStory />
        <CardLink />
        <ServiceCard />
    </div>
  )
}

export default Home