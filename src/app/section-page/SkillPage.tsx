import React from 'react'
import SkillList from '../elements/SkillList'
import SectionTitle from '../components/ui/section-title'

export default function SkillPage() {
  return (
    <section id='skill' className='min-h-max w-full text-center'>
      <SectionTitle item={{ subTitle: "My Skill", title: "Tools & Frameworks"}} />
      <div className='h-max w-full mt-3 md:mt-7'>
        <SkillList />
      </div>
    </section>
  )
}
