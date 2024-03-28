import IconList from '@/app/components/ui/icon-list'
import React from 'react'

export default function SocialMedia() {
    return <IconList media={media} />
}

const media = [
    {
        icon: "/icon/github.svg",
        link: "https://github.com/kuhrmdhn",
        name: "Github"
    },
    {
        icon: "/icon/instagram.svg",
        link: "https://www.instagram.com/kuh.rmdhn/",
        name: "Instagram"
    },
    {
        icon: "/icon/linkedin.svg",
        link: "https://www.linkedin.com/in/kukuh-ardi-ramadhan/",
        name: "Linkedin"
    }
]
