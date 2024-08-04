import React from 'react'

type Props = {
    onClick?: () => void
    text: string
    className?:string
}

export default function LitUpButton({onClick, text, className}: Props) {
  return (
      <button onClick={onClick} className={`p-[1px] relative w-fit ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-2 py-1  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent text-sm">
              {text}
          </div>
      </button>
  )
}
