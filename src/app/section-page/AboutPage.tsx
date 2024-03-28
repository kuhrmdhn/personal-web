"use client"
import TailwindConnectBtn from '@/app/components/ui/button'
import React from 'react'

export default function AboutPage() {
  const onClick = () => window.location.href = "#skill"

  return (
    <section id='about' className='w-full min-h-max h-max md:h-[50svh] lg:h-[75svh] flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-0'>
      <div className='h-max w-max md:w-1/3 text-white text-lg sm:text-3xl lg:text-5xl font-bold flex flex-col items-center md:block'>
        <h6 className='text-mainBlue text-sm md:text-base'>ABOUT ME</h6>
        <h1>Front End</h1>
        <h1>Web Developer</h1>
        <TailwindConnectBtn className='mt-3' text='My Skill' onClick={onClick} />
      </div>
      <div className='h-max w-5/6 md:w-1/2 lg:w-1/3 text-justify font-thin'>
        <p>Hi I am Kukuh Ardi Ramadhan, I am an enthusiastic and passionate front end web developer. Despite graduating from high school, I have pursued my interest in the website development.I believe that learning is an endless journey, and I am always seeking opportunities to enhance my skills and explore new technologies in the ever-evolving web development industry.</p>
        <p>I am highly enthusiastic about collaborating with individuals who share the same passion in the world of web development. If you are interested in discussing or collaborating, feel free to reach out to me!</p>
      </div>
    </section>
  )
}
