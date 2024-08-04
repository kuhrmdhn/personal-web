"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    children: React.ReactNode
    scale?: number
    duration?: number
    className?:string
}

export default function ScaleOnHover({ scale = 1.05, duration = .4, className, children }: Props) {
    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale }}
            transition={{ duration }}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    )
}
