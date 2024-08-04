import Image from 'next/image'
import React from 'react'

export default function ProfileImage() {
    return <Image className='grayscale brightness-50 h-full aspect-auto w-auto' src="/image/profile.webp" alt="Kukuh Ardi Ramadhan Photo Profile" height={450} width={450} />
}
