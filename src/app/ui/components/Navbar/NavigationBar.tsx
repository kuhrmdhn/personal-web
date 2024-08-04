"use client"
import { Navigation } from '@/types/NavigationType'
import React from 'react'
import Logo from '../../element/Logo'
import Sidebar from './Sidebar'
import NavigationList from './NavigationList'

const navigation: Navigation[] = [
    {
        link: "#home",
        navigate: "Home"
    },
    {
        link: "#about",
        navigate: "About"
    },
    {
        link: "#skill",
        navigate: "Skill"
    },
    {
        link: "#project",
        navigate: "Project"
    },
]

export default function NavigationBar() {
    return (
        <nav className='bg-black w-full h-16 flex justify-around items-center fixed top-0 left-0 z-[9999]'>
            <div className='w-full lg:w-1/3 h-full flex justify-center items-center'>
                <Logo />
            </div>
            <NavigationList
                navigation={navigation}
            />
            <Sidebar
                navigation={navigation}
            />
        </nav>
    )
}
