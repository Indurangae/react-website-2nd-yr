import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title=' Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our company Story' subtitle='Check out our company story and work process' />

            <p>At Horizon Homes, we understand that a home is more than just a physical space; it's where memories are created, and dreams are nurtured. Our team of experienced professionals is dedicated to guiding you through every step of the real estate journey, whether you're a first-time buyer, an experienced investor, or seeking a new chapter in homeownership.</p>
            <p>We believe in fostering lasting relationships, built on trust and integrity. Our mission is to empower you to make informed decisions, providing expert advice and insights into the ever-evolving real estate landscape. As you navigate our platform, discover not just properties but a commitment to your unique aspirations.</p>
            
          </div>
          <div className='right row'>
            <img src='./immio1.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
