import React from 'react'
import SocialMedia from './SocialMedia'
import { BackgroundBeams } from '../components/ui/background-beams'

export default function Footer() {
    return (
        <footer className='relative h-44 w-full pb-5 flex flex-col gap-2 justify-end items-center'>
            <SocialMedia />
            <p className='text-xs text-white font-thin'>Create by kuhrmdhn</p>
            <BackgroundBeams />
        </footer>
    )
}
