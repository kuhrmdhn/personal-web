import React from 'react'
import ProjectList from '../elements/ProjectList'

export default function ProjectPage() {
  return (
    <section id='project' className='h-max lg:min-h-[100svh] mt-3'>
      <div className='h-36 md:h-44 w-full text-white text-2xl lg:text-4xl font-bold flex flex-col items-center justify-center'>
        <h6 className='text-mainBlue text-xs md:text-sm'>My Project</h6>
        <h3>Completed Project</h3>
      </div>
      <div className='h-4/5 w-full flex justify-center items-center'>
        <ProjectList />
      </div>
    </section>
  )
}
