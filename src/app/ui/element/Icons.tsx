"use client"
import { Icon } from '@/types/IconTypes'
import Image from 'next/image'
import React from 'react'

type Props = {
    iconSource: Icon
    link?: string
    className?: string
}

export default function Icons({ iconSource, link, className }: Props) {
    const { name, image } = iconSource
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" title={name}>
            <Image src={image} alt={name} height={20} width={20} className={`cursor-pointer relative z-40 ${className}`} />
        </a>
    )
}