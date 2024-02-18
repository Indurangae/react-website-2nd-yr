import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Elevate your living experience with Horizon Homes. Uncover distinctive properties, unmatched service, and a seamless home-buying journey. Your trusted partner in realizing homeownership dreams  explore, envision, and make your move today.' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
