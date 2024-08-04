import React from 'react'
import AOVFadeUp from '../ui/framer-motion/Animate On View/AOVFadeUp'

export default function AboutPage() {
  return (
    <AOVFadeUp>
      <section id='about' className='w-full min-h-[75svh] h-max text-white flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-0'>
        <div className='h-max w-max md:w-1/3 text-lg sm:text-3xl lg:text-5xl font-bold flex flex-col items-center md:block'>
          <h1 className='text-mainBlue text-sm md:text-base'>ABOUT ME</h1>
          <h2>Front End</h2>
          <h3>Web Developer</h3>
        </div>
        <div className='h-max w-5/6 md:w-1/2 lg:w-1/3 text-justify font-thin'>
          <p>Hi I am Kukuh Ardi Ramadhan, I am an enthusiastic and passionate front end web developer. Despite graduating from high school, I have pursued my interest in the website development.I believe that learning is an endless journey, and I am always seeking opportunities to enhance my skills and explore new technologies in the ever-evolving web development industry.</p>
          <p>I am highly enthusiastic about collaborating with individuals who share the same passion in the world of web development. If you are interested in discussing or collaborating, feel free to reach out to me!</p>
        </div>
      </section>
    </AOVFadeUp>
  )
}
