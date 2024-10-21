import useTextAnimation from "@/hooks/useTextAnimation"

export default function NameHeading() {
    const name = "Kukuh Ardi Ramadhan"
    const text = useTextAnimation(name)
    return <h1 className="text-xl lg:text-5xl">{text}</h1>
}
