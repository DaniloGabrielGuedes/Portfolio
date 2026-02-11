"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Rocket } from "./Rocket"
import { Environment } from "@react-three/drei"
import { World } from "../background/World"

export function RocketCanvas() {
    return (
        <Canvas
            camera={{ position: [80, 0, 250], fov: 55, near: 0.1, far: 2000 }}
            style={{ pointerEvents: 'none' }}
        >
            <Suspense fallback={null}>
                <World />
                <group position={[150, 10, 0]}>
                    <Rocket />
                </group>
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    )
}
