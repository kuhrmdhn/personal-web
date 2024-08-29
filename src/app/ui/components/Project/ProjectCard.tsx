import Image from 'next/image'
import React from 'react'
import ProjectStackItem from './ProjectStackItem'
import TailwindConnectButton from '../../aceternityUI/TailwindConnectButton'
import { Project } from '@/types/ProjectTypes'

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    const { name, description, image, stacks, demo_url, github_url } = project

    function visitPage(url: string) {
        if (typeof window !== undefined) {
            window.open(url, "_blank")
        }
    }
    return (
        <section className='w-80 lg:w-96 h-[360px] lg:h-[420px] border-mainBlue border rounded-lg shadow-sm shadow-mainBlue p-3 flex flex-col justify-between'>
            <div className='h-1/3 w-full text-start flex flex-col justify-between text-clip'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='text-xs sm:text-sm w-full'>{description}</p>
                <ul className="overflow-x-auto flex gap-3 text-xs mt-1 scrollbar-hide">
                    {
                        stacks.map((stack, index) => (
                            <li key={index}>
                                <ProjectStackItem
                                    stackName={stack}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full h-1/2 flex justify-center'>
                <Image src={image} alt={name} height={120} width={360} className='h-full aspect-video rounded-xl' />
            </div>
            <div className='h-fit flex justify-end items-end gap-3'>
                {
                    github_url &&
                    <TailwindConnectButton text="Github" onClick={() => visitPage(github_url)} />
                }
                {
                    demo_url &&
                    <TailwindConnectButton text="Demo" onClick={() => visitPage(demo_url)} />
                }
            </div>
        </section>
    )
}
