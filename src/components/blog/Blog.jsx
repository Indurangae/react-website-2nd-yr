import React from "react"
import Back from "../common/Back"
import img from "../images/about.jpg"
import Hero from "../home/hero/Hero"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title=' Our Blogs' cover={img} />
        <div className='container recent' >
          <Hero />
        </div>
      </section>
    </>
  )
}

export default Blog
