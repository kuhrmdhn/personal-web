"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    state: boolean
    children: React.ReactNode
    delay?: number
    duration?: number
}

export default function FadeUp({ state, children, delay = 0.2, duration = 0.9 }: Props) {
    const variants = {
        visible: {
            y: 0,
            opacity: 1,
        },
        invisible: {
            y: 100,
            opacity: 0,
        }
    }
    return (
        <motion.div
            variants={variants}
            initial="invisible"
            animate={state ? "visible" : "invisible"}
            transition={{
                duration: duration,
                delay: delay
            }}
        >
            {children}
        </motion.div>
    )
}
