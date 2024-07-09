import React from 'react'
import TitleSection from '../../Components/TitleSection/TitleSection'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import './Services.css'

const Services = () => {
  return (
    <div>
        <TitleSection title='Our Services' />
          <p className='service-text'>At Studio7, we pride ourselves on offering a comprehensive suite of creative services designed to elevate your brand presence and digital footprint. Our expertise spans across various disciplines, ensuring that we meet all your design and digital needs under one roof.

              Firstly, our logo designing service is crafted to visually articulate your brand identity with precision and creativity. We understand that a logo is the cornerstone of your brand, and our team excels in creating memorable and impactful designs that resonate with your target audience.

              In web development, we specialize in building responsive, user-friendly websites that not only look stunning but also function seamlessly across all devices. Whether you need a simple informational site or a complex e-commerce platform, our developers leverage the latest technologies to deliver robust and scalable solutions tailored to your specific business goals.

              Our digital marketing strategies are meticulously designed to enhance your online presence and drive meaningful engagement. From SEO and PPC campaigns to social media management and email marketing, we employ data-driven approaches to maximize your reach and deliver measurable results.

              Additionally, our creative capabilities extend to thumbnail design, business card design, and poster design. Each project is approached with a keen eye for detail and a commitment to capturing the essence of your brand or message in a visually compelling manner.

              At Studio7, we combine creativity with technical expertise to deliver solutions that not only meet but exceed your expectations. Whether you're starting a new venture or looking to refresh your brand's image, we are dedicated to partnering with you to achieve your business objectives effectively and efficiently.</p>
        <ServiceCard />
    </div>
  )
}

export default Services