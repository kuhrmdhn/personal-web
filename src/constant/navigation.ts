export interface NavigationType {
    id: number,
    title: string
    url: string
}

export const navigationData:NavigationType[] = [
    {
        id: 1,
        title: "Home",
        url: "#home"
    },
    {
        id: 2,
        title: "About",
        url: "#about"
    },
    {
        id: 3,
        title: "Skill",
        url: "#skill"
    },
    {
        id: 4,
        title: "Project",
        url: "#project"
    },
    {
        id: 5,
        title: "Contact",
        url: "#contact"
    },
]