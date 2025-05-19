import React from 'react'
import aboutImage from "../assets/about.webp"
const About = () => {
  return (
   <section className='max-w-7xl mx-auto border-b-2 mt-20'>
    <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4'>About</h2>
    <div className='flex flex-col items-center lg:space-x-8 mx-4 mb-20 '>
        <div className='mb-8 lg:mb-0'>
            <img src={aboutImage} alt="about" className='w-full h-auto' />
        </div>
        <p className='text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam quas officiis, obcaecati dolorem nobis dolor assumenda at non facere magni doloremque! Veritatis totam assumenda adipisci explicabo, delectus est illum eligendi corporis rem recusandae voluptatibus voluptates quia ab soluta velit possimus cum ratione earum, exercitationem, pariatur neque illo id! Corporis quod neque quos accusamus ipsa distinctio delectus eligendi voluptate aliquid?</p>
    </div>
   </section>
  )
}

export default About