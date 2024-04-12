"use client"
import Image from 'next/image'
import React from 'react'
import TailwindConnectBtn from './button'

export type project = {
    title: string
    source: string
    height: number
    width: number
    description: string
    btn1Text?: string
    btn2Text?: string
    github?: string
    live?: string
}

type projectItem = {
    item: project
}

export default function ProjectCard({ item }: projectItem) {
    return (
        <div className='h-[450px] sm:h-[550px] w-72 sm:w-96 border border-neutral-300 rounded-xl text-white'>
            <section>
                <Image className='rounded-t-xl' alt={item.title} src={item.source} height={250} width={400} />
            </section>
            <section className="h-3/5 px-3 pt-3 flex justify-around flex-col">
                <h3 className="font-extrabold text-lg">{item.title}</h3>
                <div className='overflow-y-auto webkit-hide h-2/3 text-justify text-sm font-light'>
                    <p>{item.description}</p>
                </div>
                <div className='h-max flex gap-3 justify-center'>
                    {
                        item.btn1Text &&
                        <TailwindConnectBtn text={item.btn1Text} onClick={() => parent.open(`${item.github}`)} />
                    }
                    {
                        item.btn2Text &&
                        <TailwindConnectBtn text={item.btn2Text} onClick={() => parent.open(`${item.live}`)} />
                    }
                </div>
            </section>
        </div>
    )
}
