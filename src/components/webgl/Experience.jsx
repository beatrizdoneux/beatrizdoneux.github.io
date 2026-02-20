import React, { useContext, useEffect, useMemo } from "react"
import { ThemeContext } from "../../App"
import { Canvas } from "@react-three/fiber"

export default function Experience() {

    const { darkTheme } = useContext(ThemeContext)

    // Get the background color from CSS variables based on the current theme
    const bgColor = useMemo(() => {
        const rootStyles = getComputedStyle(document.documentElement)

        return darkTheme
        ? rootStyles.getPropertyValue("--color-primary-dark").trim()
        : rootStyles.getPropertyValue("--color-primary-light").trim()

    }, [darkTheme])

    return (
        <>
            <Canvas
                className="fixed top-0 left-0 w-full h-full -z-10"
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 4, 6]
                }}>

                <color args={[bgColor]} attach='background' />
            </Canvas>
        </>
    )
}