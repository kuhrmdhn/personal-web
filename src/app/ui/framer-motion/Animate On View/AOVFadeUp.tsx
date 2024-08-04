"use client"
import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import FadeUp from '../Animation/FadeUp'

type Props = {
    children: React.ReactNode
    delay?: number
    duration?: number
}

export default function AOVFadeUp({ children, delay, duration }: Props) {
    const viewContainer = useRef(null)
    const isContainerInView = useInView(viewContainer, { once: true })
    return (
        <section ref={viewContainer} className='mb-2'>
            <FadeUp state={isContainerInView} delay={delay} duration={duration}>
                {children}
            </FadeUp>
        </section >
    )
}
