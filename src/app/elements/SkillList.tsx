import React from 'react'
import IconList from '../components/ui/icon-list'

export default function SkillList () {
    const fundamentalMedia = [
        {
            icon: "/icon/html.svg",
            name: "HTML",
        },
        {
            icon: "/icon/css.svg",
            name: "CSS",
        },
        {
            icon: "/icon/javascript.svg",
            name: "Javascript",
        }
    ]
    const frameworkMedia = [
        {
            icon: "/icon/tailwind.svg",
            name: "Tailwind CSS",
        },
        {
            icon: "/icon/material-ui.svg",
            name: "Material UI",
        },
        {
            icon: "/icon/chakraui.svg",
            name: "Chakra UI",
        },
        {
            icon: "/icon/react.svg",
            name: "React JS",
        }
    ]
    return (
        <div className='flex flex-col items-center'>
            <section>
                <IconList iconHeight={40} iconWidth={40} media={fundamentalMedia} />
            </section>
            <section className='h-fit'>
                <IconList className='bg-white hover:bg-white' iconHeight={40} iconWidth={40} media={frameworkMedia} />
            </section>
        </div>
    )
}
