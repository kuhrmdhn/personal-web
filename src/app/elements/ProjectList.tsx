import React from 'react';
import ProjectCard from '../components/ui/project-card';

export default function ProjectList() {
    const projects = [
        {
            title: "GAMOST 11",
            source: "/image/gamost11-preview.webp",
            btn1Text: "Github",
            btn2Text: "Live View",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempora labore, fugit ea nisi aut in necessitatibus corrupti temporibus non, voluptatum, debitis exercitationem eos nemo perspiciatis molestias ipsa delectus dicta doloribus distinctio accusamus fugiat totam. Omnis iure quod eveniet nobis incidunt quo, laudantium esse dicta eaque dolore ex voluptatum! Consectetur accusamus accusantium odio assumenda, cupiditate molestias omnis aspernatur magnam quam fugit consequuntur pariatur suscipit repudiandae expedita officiis. Animi impedit aliquam commodi est iure ad enim nam inventore ipsam magnam fugit nemo ratione velit iste, in voluptates, accusantium repellendus exercitationem autem voluptatibus dolorum nostrum, assumenda aperiam! Unde debitis illum consectetur enim?",
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
            description: "Notes is a website app built with React TS. You can save notes here.",
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
