import React from 'react'
import Image from 'next/image'
import SocialMedia from '../elements/SocialMedia'
import { BackgroundBeams } from '../components/ui/background-beams'

export default function HomePage() {
  return (
    <section id='home' className="relative w-full h-[100svh] md:h-[50svh] lg:h-[100svh] flex justify-center items-center">
      <div className='relative w-5/6 sm:w-full lg:w-1/2 h-max font-extrabold mt-32 sm:mt-0 sm:pl-7'>
        <section className='absolute -z-10 sm:-z-20 lg:-z-10 -top-10 flex flex-col gap-1 text-4xl md:text-7xl sm:w-screen lg:w-auto text-secondary'>
          <h1>Front End</h1>
          <h1>Web Developer</h1>
        </section>
        <section className='text-white w-full sm:max-w-screen-sm lg:w-5/6 relative z-10'>
          <h4 className='text-lg lg:text-2xl font-semibold'><span className='text-mainBlue'>Hello</span>, its Me</h4>
          <h1 className='text-2xl lg:text-5xl'>Kukuh Ardi Ramadhan</h1>
          <p className='w-full lg:w-4/5 text-justify font-normal mt-3 text-xs md:text-sm'>A FrontEnd Web Developer who is enthusiastic in website development. Enjoys learning new technology and focuses on the future.</p>
          <SocialMedia />
        </section>
      </div>
      <Image className='absolute sm:relative -z-30 md:z-10 sm:right-0 brightness-50 grayscale self-center lg:self-end' src="/image/profile.webp" alt="Kukuh Ardi Ramadhan Photo Profile" height={450} width={450} />
      <BackgroundBeams />
    </section>
  )
}
