"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Rocket } from "./Rocket"
import { Environment } from "@react-three/drei"
import { World } from "../background/World"
import { useThree } from "@react-three/fiber"

function Scene() {
    const { viewport } = useThree()

    const isMobile = viewport.width < 240

    return (
        <>
            <World />

            <group position={isMobile ? [39, -100, -120] : [viewport.width / 3.5, 10, 0]}>
                <Rocket />
            </group>

            <Environment preset="city" />
        </>
    )
}

export function RocketCanvas() {
    return (
        <Canvas
            camera={{ position: [80, 0, 250], fov: 55, near: 0.1, far: 2000 }}
            style={{ pointerEvents: 'none' }}
        >
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    )
}
