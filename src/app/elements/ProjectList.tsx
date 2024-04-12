import React from 'react';
import ProjectCard from '../components/ui/project-card';

export default function ProjectList() {
    const projects = [
        {
            title: "GAMOST Web Album",
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
            title: "Notes Web App",
            source: "/image/notes-preview.webp",
            btn1Text: "Github",
            btn2Text: "Live View",
            description: "The web application is built with React.js + TypeScript, Chakra UI, Chakra UI Icons, Tailwind CSS, and React Router DOM. It's a note-taking application that utilizes localStorage as a storage mechanism for notes, allowing CRUD (Create, Read, Update, Delete) operations.",
            height: 100,
            width: 250,
            github: "https://github.com/kuhrmdhn/notes-apps",
            live: "https://kuhrmdhn-notes.vercel.app/"
        },
        {
            title: "WarungWeb",
            source: "/image/warung-web.webp",
            btn1Text: "Github",
            description: "The 'Warung Web' web application consists of 3 pages, namely the Cashier App, Chef App, and Owner App. Its database management utilizes JSON server and JSON placeholder, making the database local or undeployed.JSON server and JSON placeholder are tools commonly used in web development for creating a mock REST API server.JSON server allows developers to quickly set up a REST API with CRUD operations(Create, Read, Update, Delete) based on a JSON file.JSON placeholder, on the other hand, provides a fake online REST API for testing and prototyping purposes.In the context of 'Warung Web', these tools are utilized to simulate a backend database for managing data related to cashier transactions, chef orders, and owner management tasks.However, it's important to note that since the database is local or undeployed, it may have limitations in terms of scalability and accessibility compared to a fully deployed and remote database solution.",
            height: 100,
            width: 250,
            github: "https://github.com/kuhrmdhn/WarungWebApp",
        }
    ];

    return (
        <section className='flex flex-col sm:flex-row gap-7 flex-wrap justify-center'>
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} item={project} />
                ))
            }
        </section>
    );
}
