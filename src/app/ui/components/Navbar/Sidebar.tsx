import { Navigation } from "@/types/NavigationType"
import { useCallback, useEffect, useState } from "react"
import ToggleButton from "../../element/ToggleButton"
import { motion } from "framer-motion"
import ScaleOnHover from "../../framer-motion/Animation/ScaleOnHover"
import NavItem from "./NavItem"

export default function Sidebar({ navigation }: { navigation: Navigation[] }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const handleSidebarToggle = (e: React.MouseEvent) => {
        e.stopPropagation()
        setSidebarOpen(state => !state)
    }

    const handleBodyClick = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (!target.closest('.toggle-button')) {
            setSidebarOpen(false)
        }
    }, [])

    useEffect(() => {
        const body = document.body
        body.addEventListener('click', handleBodyClick)
        return () => {
            body.removeEventListener('click', handleBodyClick)
        }
    }, [handleBodyClick])

    return (
        <div className='block sm:hidden'>
            <ToggleButton
                toggleMenu={(e) => handleSidebarToggle(e)}
                menuOpen={sidebarOpen}
            />
            <NavList
                navItems={navigation}
                sidebarOpen={sidebarOpen}
            />
        </div>
    )
}


type NavListProps = {
    sidebarOpen: boolean,
    navItems: Navigation[],
}
function NavList({ sidebarOpen, navItems }: NavListProps) {
    const variants = {
        open: {
            x: 0,
            width: "240px",
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                width: { duration: 0.2 }
            }
        },
        closed: {
            x: -1000,
            width: "0px",
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                width: { duration: 0.2 }
            }
        }
    }

    return (
        <motion.nav
            variants={variants}
            initial="closed"
            animate={sidebarOpen ? "open" : "closed"}
            className='h-full fixed z-20 left-0 top-0 flex bg-black flex-col pt-20 px-4 gap-7 font-bold text-white'
        >
            <ul className='h-full flex flex-col items-center gap-5 w-full'>
                {
                    navItems.map((navigation: Navigation, index: number) => (
                        <NavItem
                            navigation={navigation}
                            key={index}
                        />
                    ))
                }
            </ul>
        </motion.nav>
    )
}