import React from 'react'
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500", "700"] })

export default function Logo() {
    return <h1 className={`${ubuntu.className} font-bold text-xl lg:text-2xl`}>Kuhrmdhn<span className='font-bold text-3xl text-mainBlue'>.</span></h1>
}
