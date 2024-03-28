import Image from 'next/image'
import React from 'react'

type Icon = {
    icon: string,
    link?: string,
    name: string,
}
type IconListProps = {
    media: Icon[],
    className?: string,
    iconHeight?: number,
    iconWidth?:number
}

export default function IconList({ media, className, iconHeight, iconWidth }: IconListProps) {
    return (
        <div className="w-fit h-fit mt-3 flex gap-4 justify-start items-center relative z-10">
            {
                media.map((media: Icon, index: number) => (
                    <a key={index} target='_blank' title={media.name} href={media.link} className={`text-center cursor-pointer hover:bg-secondary duration-300 p-2 rounded-full border border-transparent ${className}`}>
                        <Image height={iconHeight || 20} width={iconWidth || 20} src={media.icon} alt={media.name} />
                    </a>
                ))
            }
        </div>
    )
}
