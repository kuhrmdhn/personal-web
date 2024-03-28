import React from 'react'
import SkillList from '../elements/SkillList'

export default function SkillPage() {
  return (
    <section id='skill' className='min-h-max w-full text-center'>
      <div className='h-max w-full pt-7 text-white text-2xl lg:text-4xl font-bold flex flex-col items-center'>
        <h6 className='text-mainBlue text-sm md:text-base'>My SKill</h6>
        <h3>Tools & Frameworks</h3>
      </div>
      <div className='h-max w-full mt-7'>
        <SkillList />
      </div>
    </section>
  )
}
