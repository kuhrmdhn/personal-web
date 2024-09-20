import { projectRouter } from '@/database/projectListRouter'
import { useProjectStore } from '@/lib/zustand/useProjectStore'
import { Project } from '@/types/ProjectTypes'
import { useState } from 'react'
import TailwindConnectButton from '../ui/aceternityUI/TailwindConnectButton'
import ProjectCard from '../ui/components/Project/ProjectCard'
import AOVFadeUp from '../ui/framer-motion/Animate On View/AOVFadeUp'

export default function ProjectListPage() {
    const { projectList } = useProjectStore()
    const [fetchLimit, setFetchLimit] = useState(2)
    const { getProjectList } = projectRouter
    function fetchMoreProject() {
        const newLimit = fetchLimit + 3
        getProjectList(newLimit)
        setFetchLimit(newLimit)
    }

    return (
        <AOVFadeUp>
            <section id="project" className='w-full min-h-[100svh] pt-16 flex flex-col items-center'>
                <div className='h-1/5 w-full text-lg sm:text-xl lg:text-3xl font-bold flex flex-col items-center justify-center'>
                    <h1 className='text-mainBlue text-sm md:text-base'>MY PROJECT</h1>
                    <h2>My Completed Project</h2>
                </div>
                <div className='w-full min-h-[75%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-3 mt-5'>
                    {
                        projectList.map((project: Project, index: number) => (
                            <AOVFadeUp key={index} delay={(index + 1) / 10}>
                                <ProjectCard
                                    project={project}
                                />
                            </AOVFadeUp>
                        ))
                    }
                </div>
                {
                    projectList.length > fetchLimit &&
                    <TailwindConnectButton
                        className="mt-7 w-fit"
                        text='See More Project'
                        onClick={fetchMoreProject}
                    />
                }
            </section>
        </AOVFadeUp>
    )
}
