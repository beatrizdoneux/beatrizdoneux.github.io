import { useContext, useMemo, useRef, useEffect } from "react"
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

    const { viewport, camera } = useThree()

    // number of seeds scaled to viewport width
    const count = Math.max(8, Math.floor(viewport.width * 3))

    const seeds = useRef([])
    const texture = useLoader(TextureLoader, seedSvg)
    texture.colorSpace = THREE.SRGBColorSpace

    // Collision parameters
    const FLEE_RADIUS = 1 // distance from mouse
    const RETURN_FACTOR = FLEE_RADIUS * 2 // return at double the radius
    const INITIAL_FLEE_SPEED = 6 // initial flee impulse magnitude
    const FLEE_DECAY_RATE = 6 // how quickly flee velocity decays (per second)

    // Store movement + flee state per seed
    const seedData = useRef(
        [...Array(count)].map(() => ({
            speed: 0.3 + Math.random() * 0.3,
            rotationSpeed: 0.5 + Math.random(),
            driftAmplitude: 0.5 + Math.random() * 0.5,
            driftOffset: Math.random() * Math.PI * 2,
            scale: 0.4 + Math.random() * 0.03,
            
            // flee state
            fleeVel: new THREE.Vector3(),
            fleeing: false,
        }))
    )

    // raycaster + plane to map mouse NDC to world z=0
    const raycaster = useMemo(() => new THREE.Raycaster(), [])
    const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), [])
    const mouse = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
            mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    // reusable vectors
    const mousePoint = new THREE.Vector3()
    const dir = new THREE.Vector3()

    useFrame((state, delta) => {
        const time = state.clock.elapsedTime

        // map mouse to world on z=0 plane
        raycaster.setFromCamera(mouse.current, camera)
        raycaster.ray.intersectPlane(plane, mousePoint) || raycaster.ray.at(5, mousePoint)

        seeds.current.forEach((seed, i) => {
            if (!seed) return

            const data = seedData.current[i]

            // Base movement (vertical float + drift)
            seed.position.y += delta * data.speed

            // Reset when too high
            if (seed.position.y > viewport.height / 2) {
                seed.position.y = -viewport.height
                seed.position.x = (Math.random() - 0.5) * viewport.width
                data.speed = 0.3 + Math.random() * 0.3
            }

            seed.position.x += Math.sin(time + data.driftOffset) * data.driftAmplitude * delta * 0.5
            seed.material.rotation += delta * data.rotationSpeed

            // Distance to mouse (in-plane, seeds and mouse are at z=0)
            const distance = seed.position.distanceTo(mousePoint)

            // If seed is within flee radius, trigger a flee impulse
            if (!data.fleeing && distance < FLEE_RADIUS) {
                data.fleeing = true
                // direction away from mouse
                dir.copy(seed.position).sub(mousePoint).normalize()
                // stronger if closer
                const strength = INITIAL_FLEE_SPEED * (1 + (FLEE_RADIUS - distance) / FLEE_RADIUS)
                data.fleeVel.copy(dir.multiplyScalar(strength))
            }

            // If fleeing, apply flee velocity and decay it.
            if (data.fleeing) {
                // Apply flee displacement
                seed.position.addScaledVector(data.fleeVel, delta)

                // Decay flee velocity
                const decayFactor = Math.max(0, 1 - FLEE_DECAY_RATE * delta)
                data.fleeVel.multiplyScalar(decayFactor)

                // Stop fleeing once beyond return distance
                if (seed.position.distanceTo(mousePoint) > FLEE_RADIUS * RETURN_FACTOR) {
                    data.fleeing = false
                    data.fleeVel.set(0, 0, 0)
                }
            }
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