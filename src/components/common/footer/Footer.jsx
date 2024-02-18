import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.jpg' alt='logo' />
              <h2>Contact us today via email</h2>
              <p>Discover your dream home with us where comfort meets elegance. Explore our diverse range
                 of properties... Email us </p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 HORIZON HOMES. Designd By Induranga Ekanayake.</span>
      </div>
    </>
  )
}

export default Footer
