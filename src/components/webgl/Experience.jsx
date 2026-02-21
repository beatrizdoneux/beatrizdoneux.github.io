import { useContext, useMemo, useRef } from "react"
import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber"
import { TextureLoader } from "three"
import * as THREE from "three"

import { ThemeContext } from "../../App"
import seedSvg from "../../assets/seed.svg"

export default function Experience() {

    const { darkTheme } = useContext(ThemeContext)

    // Get the background color from CSS variables based on the current theme
    const bgColor = useMemo(() => {
        const rootStyles = getComputedStyle(document.documentElement)

        return darkTheme
            ? rootStyles.getPropertyValue("--color-primary-dark").trim()
            : rootStyles.getPropertyValue("--color-primary-light").trim()

    }, [darkTheme])

    const sparkleColor = useMemo(() => {
        const rootStyles = getComputedStyle(document.documentElement)

        return darkTheme
            ? rootStyles.getPropertyValue("--sparkle-color-dark").trim()
            : rootStyles.getPropertyValue("--sparkle-color-light").trim()

    }, [darkTheme])

    return (
        <Canvas className="fixed top-0 left-0 w-full h-full -z-10" camera={{ fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6] }}>
            <color args={[bgColor]} attach="background" />
            <Seeds sparkleColor={sparkleColor} />
        </Canvas>
    )
}

function Seeds({ sparkleColor }) {

    const { viewport } = useThree()

    const count = Math.floor(viewport.width * 3)

    const seeds = useRef([])
    const texture = useLoader(TextureLoader, seedSvg)
    texture.colorSpace = THREE.SRGBColorSpace

    // Store movement data per seed
    const seedData = useRef(
        [...Array(count)].map(() => ({
            speed: 0.3 + Math.random() * 0.3,
            rotationSpeed: 0.5 + Math.random(),
            driftAmplitude: 0.5 + Math.random() * 0.5,
            driftOffset: Math.random() * Math.PI * 2,
            scale: 0.3 + Math.random() * 0.05,
        }))
    )

    useFrame((state, delta) => {

        const time = state.clock.elapsedTime

        seeds.current.forEach((seed, i) => {
            if (!seed) return

            const data = seedData.current[i]

            // Vertical float
            seed.position.y += delta * data.speed

            // Reset when too high
            if (seed.position.y > viewport.height / 2) {

                // Reset vertical position to bottom
                seed.position.y = -viewport.height

                // Randomize horizontal position
                seed.position.x = (Math.random() - 0.5) * viewport.width

                // Randomize speed
                data.speed = 0.3 + Math.random() * 0.3
            }

            // Side drift
            seed.position.x +=
                Math.sin(time + data.driftOffset) *
                data.driftAmplitude *
                delta *
                0.5

            // Z rotation
            seed.material.rotation += delta * data.rotationSpeed
        })
    })

    return (
        <>
            {[...Array(count)].map((value, index) =>
                <sprite
                    key={index}
                    ref={(element) => { seeds.current[index] = element }}
                    position={[
                        (Math.random() - 0.5) * 20,
                        (Math.random() - 0.5) * 20,
                        0
                    ]}
                    scale={seedData.current[index].scale}
                >
                    <spriteMaterial
                        map={texture}
                        color={sparkleColor}
                        transparent
                    />
                </sprite>
            )}
        </>
    )

}