export interface SocialMediaType {
    id: number
    title: string
    url: string
    icon: string
}

export const SocialMediaData:SocialMediaType[] = [
    {
        id: 1,
        title: "GitHub",
        url: "https://github.com/kuhrmdhn",
        icon: "/icons/github.svg"
    },
    {
        id: 2,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/kukuh-ardi-ramadhan",
        icon: "/icons/linkedin.svg"
    },
    {
        id: 3,
        title: "Instagram",
        url: "https://www.instagram.com/kuh.rmdhn",
        icon: "/icons/instagram.svg"
    },
]