import React from 'react'

type titleItem = {
    title: string,
    subTitle: string
}

type items = {
    item: titleItem
}

export default function SectionTitle({ item }: items) {
    return (
        <div className='h-max w-full pt-7 text-white text-2xl lg:text-4xl font-bold flex flex-col items-center'>
            <h6 className='text-mainBlue text-sm md:text-lg'>{item.subTitle}</h6>
            <h3>{item.title}</h3>
        </div>
    )
}
