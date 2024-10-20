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
            <li className="link-underline w-12 lg:w-20 underline-offset-4 rounded-md text-xs lg:text-base relative text-center font-semibold">
                <a href={link}>{navigate}</a>
            </li>
        </ScaleOnHover>
    )
}
