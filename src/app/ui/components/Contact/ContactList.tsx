"use client"
import { Icon } from '@/types/IconTypes'
import React from 'react'
import Icons from '../../element/Icons'
import ScaleOnHover from '../../framer-motion/Animation/ScaleOnHover'

interface Contact extends Icon {
  link: string
}

const contactData: Contact[] = [
  {
    image: "/icon/github.svg",
    link: "https://github.com/kuhrmdhn",
    name: "Github"
  },
  {
    image: "/icon/instagram.svg",
    link: "https://www.instagram.com/kuh.rmdhn/",
    name: "Instagram"
  },
  {
    image: "/icon/linkedin.svg",
    link: "https://www.linkedin.com/in/kukuh-ardi-ramadhan/",
    name: "Linkedin"
  }

]

export default function ContactList() {
  return (
    <div className='flex gap-7 mt-3'>
      {
        contactData.map((contact: Contact, index: number) => (
          <ScaleOnHover key={index}>
            <Icons
              iconSource={contact}
              link={contact.link}
            />
          </ScaleOnHover>
        ))
      }
    </div>
  )
}
