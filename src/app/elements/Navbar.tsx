const menu = [
    {
        link: "#home",
        name: "Home"
    },
    {
        link: "#about",
        name: "About"
    },
    {
        link: "#project",
        name: "Project"
    }
]

import { FloatingNav } from '@/app/components/ui/floating-navbar'
import React from 'react'

export default function Navbar() {
    return <FloatingNav navItems={menu} />
}
