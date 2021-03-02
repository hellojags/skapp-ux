import { useEffect, useState } from "react"

function getWindowDimensions() {
    const width = window.innerWidth && document.documentElement.clientWidth ?
        Math.max(window.innerWidth, document.documentElement.clientWidth) :
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName('body')[0].clientWidth
    const height = document.getElementById('root').clientHeight
    return {
        width,
        height
    }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowDimensions
}