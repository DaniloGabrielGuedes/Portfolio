"use client"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { ThrusterFire } from "./ThrusterFire"

export function Rocket() {
    const ref = useRef<THREE.Group>(null)
    const { scene } = useGLTF("/models/Rocket.glb")

    const offset = 2.7;
    const baseY = -45;

    useFrame(() => {
        const scrollY = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const scrollProgress = scrollY / maxScroll
        const moveCycles = 1.8

        if (ref.current) {
            ref.current.rotation.x = Math.sin((scrollProgress * moveCycles) * Math.PI) * 0.02
            ref.current.rotation.y = scrollProgress * Math.PI * moveCycles
            ref.current.rotation.z = Math.sin((scrollProgress * moveCycles) * Math.PI) * 0.02
        }
    })

    return (
        <group ref={ref} scale={1.2}>
            <primitive object={scene} />
            <group position={[0, baseY, 0]}>
                <ThrusterFire position={[offset, 0, offset]} />
                <ThrusterFire position={[-offset, 0, offset]} />
                <ThrusterFire position={[offset, 0, -offset]} />
                <ThrusterFire position={[-offset, 0, -offset]} />
            </group>
        </group>
    )
}

useGLTF.preload("/models/Rocket.glb")
