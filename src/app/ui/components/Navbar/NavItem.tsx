"use client"
import React, { useEffect } from 'react'
import ScaleOnHover from '../../framer-motion/Animation/ScaleOnHover'
import { Navigation } from '@/types/NavigationType'
import { toLetterCase } from '@/app/config/toLetterCase'

type Props = {
    navigation: Navigation,
}

export default function NavItem({ navigation }: Props) {
    const { link, navigate } = navigation

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const idUrl = window.location.hash.substring(1)
            const locationId = toLetterCase(idUrl)
            const scrollToTop = () => window.scrollTo({ behavior: "smooth", top: 0 })
            
            if (!idUrl) {
                scrollToTop()
            } else if (locationId === "Home") {
                scrollToTop()
            } else {
                const element = document.getElementById(idUrl)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }, [])

    return (
        <ScaleOnHover>
            <li className="after:absolute after:bg-white after:h-1 after:w-4 after:-bottom-1 after:right-1/2 after:scale-x-0 after:invisible after:hover:scale-x-100 after:hover:visible after:translate-x-1/2 w-12 lg:w-20 underline-offset-4 rounded-md text-xs lg:text-base relative after:duration-500 text-center">
                <a href={link}>{navigate}</a>
            </li>
        </ScaleOnHover>
    )
}
