import React from 'react'
import ProjectList from '../elements/ProjectList'
import SectionTitle from '../components/ui/section-title'

export default function ProjectPage() {
  return (
    <section id='project' className='h-max lg:min-h-[100svh] mt-12'>
      <SectionTitle item={{subTitle: "MyProject", title: "Completed Project"}} />
      <div className='h-4/5 w-full flex justify-center items-center mt-10'>
        <ProjectList />
      </div>
    </section>
  )
}
