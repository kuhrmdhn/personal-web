import React from 'react'
import ProfileImage from '../ui/element/ProfileImage'
import { BackgroundBeams } from '../ui/aceternityUI/BackgroundBeams'
import ContactList from '../ui/components/Contact/ContactList'
import NameHeading from '../ui/element/NameHeading'

export default function HomePage() {
    return (
        <section id="home" className="relative min-h-[100svh] h-max w-full text-white px-10 flex items-start sm:items-center pt-16 z-10">
            <div className='relative w-full flex flex-col gap-3 lg:w-1/2 h-max font-extrabold mt-32 sm:mt-0 sm:pl-10'>
                <section className='absolute -z-10 sm:-z-20 lg:z-10 -top-10 flex flex-col gap-1 text-4xl md:text-7xl sm:w-screen lg:w-auto text-secondary'>
                    <h1>Front End</h1>
                    <h1>Web Developer</h1>
                </section>
                <section className='text-white w-full sm:max-w-screen-sm lg:w-full relative z-10'>
                    <h4 className='text-base lg:text-2xl font-semibold'><span className='text-mainBlue'>Hello</span>, its Me</h4>
                    <div className='min-h-10 w-full'>
                        <NameHeading />
                    </div>
                    <p className='w-full lg:w-4/5 text-justify font-light mt-3 text-xs md:text-sm'>A FrontEnd Web Developer who is enthusiastic in website development. Enjoys learning new technology and focuses on the future.</p>
                </section>
                <section className='relative z-20 w-fit'>
                    <ContactList />
                </section>
            </div>
            <div className='absolute right-0 bottom-0 z-0 sm:-z-30 sm:h-3/4'>
                <ProfileImage />
            </div>
            <BackgroundBeams />
        </section>
    )
}
