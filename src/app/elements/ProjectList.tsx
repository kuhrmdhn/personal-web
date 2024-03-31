import React from 'react';
import ProjectCard from '../components/ui/project-card';

export default function ProjectList() {
    const projects = [
        {
            title: "GAMOST 11",
            source: "/image/gamost11-preview.webp",
            btn1Text: "Github",
            btn2Text: "Live View",
            description: "The album website is built with Next.js, TypeScript, Tailwind CSS, and Aceternity UI. It contains photos of class XII MIPA 2/GAMOST (Generation Amazing Of Science Two) members, intended to leave a lasting impression during their school years.",
            height: 100,
            width: 250,
            github: "https://github.com/kuhrmdhn/gamost11",
            live: "https://gamost11.vercel.app/"
        },
        {
            title: "Notes",
            source: "/image/notes-preview.webp",
            btn1Text: "Github",
            btn2Text: "Live View",
            description: "The web application is built with React.js + TypeScript, Chakra UI, Chakra UI Icons, Tailwind CSS, and React Router DOM. It's a note-taking application that utilizes localStorage as a storage mechanism for notes, allowing CRUD (Create, Read, Update, Delete) operations.",
            height: 100,
            width: 250,
            github: "https://github.com/kuhrmdhn/notes-apps",
            live: "https://kuhrmdhn-notes.vercel.app/"
        }
    ];

    return (
        <section className='flex flex-col sm:flex-row gap-7'>
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} item={project} />
                ))
            }
        </section>
    );
}
