"use client"

import { useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"

export function World() {
    const starsRef = useRef<THREE.Points>(null)

    const STARS_COUNT = 20000

    const [starCoords] = useMemo(() => {
        const coords = new Float32Array(STARS_COUNT * 3)
        for (let i = 0; i < STARS_COUNT; i++) {
            coords[i * 3] = (Math.random() - 0.5) * 5000
            coords[i * 3 + 1] = (Math.random() - 0.5) * 5000
            coords[i * 3 + 2] = (Math.random() - 0.5) * 5000
        }
        return [coords]
    }, [])

    useFrame(() => {
        const scrollY = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1)

        const spaceColor = new THREE.Color("#010101")
        // const atmosphereColor = new THREE.Color("#1a3378")
        // const groundColor = new THREE.Color("#366af7")

        // const finalColor = spaceColor;
        // if (progress < 0.5) {
        //     finalColor.copy(spaceColor).lerp(atmosphereColor, progress * 2)
        // } else {
        //     finalColor.copy(atmosphereColor).lerp(groundColor, (progress - 0.5) * 2)
        // }

        const canvasContainer = document.getElementById("canvas-container")
        if (canvasContainer) {
            canvasContainer.style.backgroundColor = `#${spaceColor.getHexString()}`
        }

        if (starsRef.current) {
            starsRef.current.position.y = progress * 200
            // const mat = starsRef.current.material as THREE.PointsMaterial
            // mat.opacity = THREE.MathUtils.lerp(1, 0, progress * 2)
        }

        // if (groundRef.current) {

        //     const groundProgress = Math.max(0, (progress - 0.7) / 0.3)
        //     const targetY = -150 + (groundProgress * 102) // Sobe de -150 para -48

        //     groundRef.current.position.y = THREE.MathUtils.lerp(groundRef.current.position.y, targetY, 0.1)

        //     const mat = groundRef.current.material as THREE.MeshStandardMaterial
        //     mat.opacity = groundProgress
        // }
    })

    return (
        <group>
            <points ref={starsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[starCoords, 3]}
                        count={STARS_COUNT}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.5}
                    color="white"
                    transparent
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* <mesh
                ref={groundRef}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -150, 0]}
            >
                <circleGeometry args={[150, 64]} />
                <meshStandardMaterial
                    color="#176914"
                    roughness={0.8}
                    transparent={true}
                    alphaMap={alphaMap}
                    depthWrite={true}
                />
            </mesh> */}
        </group>
    )
}