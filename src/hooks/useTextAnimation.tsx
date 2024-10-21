"use client"
import { useEffect, useState } from "react"

export default function useTextAnimation(text: string, totalFrame: number = 120) {
    const [displayText, setDisplayText] = useState("")
    let currentFrame = 0
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^%&*()";
    const charsLength = chars.length
    const textLength = text.length
    let result = [...Array(textLength)].fill("")

    function animation() {
        currentFrame++
        result = result.map((_, i) => {
            if (currentFrame < totalFrame * (i + 1) / textLength) {
                const randomIndex = Math.floor(Math.random() * charsLength)
                return chars[randomIndex]
            } else {
                return text[i]
            }
        })
        setDisplayText(result.join(""))
        if (currentFrame < totalFrame) {
            requestAnimationFrame(animation)
        }
    }
    useEffect(() => {
        animation()
    }, [])
    return displayText
}
