import { useSkillStore } from '@/lib/zustand/useSkillStore'
import React from 'react'
import Icons from '../ui/element/Icons'
import { skillList } from '@/types/SkillTypes'
import AOVFadeUp from '../ui/framer-motion/Animate On View/AOVFadeUp'

export default function SkillListPage() {
    const { skillList } = useSkillStore()

    return (
        <AOVFadeUp>
            <section id="skill" className='w-full h-max min-h-[40svh] pt-16 text-white flex flex-col items-center mb-2'>
                <div className='h-max w-full text-lg sm:text-xl lg:text-3xl font-bold flex flex-col items-center justify-center mb-5'>
                    <h1 className='text-mainBlue text-sm md:text-base'>MY SKILL</h1>
                    <h2>Tools and Framework</h2>
                </div>
                <div className='w-11/12 sm:w-1/2 lg:w-1/3 h-max flex flex-wrap gap-5 sm:gap-7 justify-center'>
                    {
                        skillList.map((skill: skillList, index: number) => (
                            <AOVFadeUp key={index} delay={(index + 1) / 10}>
                                <Icons
                                    iconSource={skill}
                                    className='w-10 aspect-square hover:scale-125 duration-300'
                                />
                            </AOVFadeUp>
                        ))
                    }
                </div>
            </section>
        </AOVFadeUp>
    )
}
