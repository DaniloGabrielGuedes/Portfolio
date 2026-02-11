"use client"
import { useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"

export function ThrusterFire({ position }: { position: [number, number, number] }) {
    const points = useRef<THREE.Points>(null)

    const PARTICLE_COUNT = 2000
    const HEIGHT_LIMIT = -35
    const INITIAL_Y = 0

    const [particles, directions, offsets] = useMemo(() => {
        const pos = new Float32Array(PARTICLE_COUNT * 3)
        const dirs = new Float32Array(PARTICLE_COUNT * 2)
        const offs = new Float32Array(PARTICLE_COUNT)

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            dirs[i * 2] = Math.random() * Math.PI * 2
            dirs[i * 2 + 1] = 0.03 + Math.random() * 0.3

            pos[i * 3 + 1] = Math.random() * HEIGHT_LIMIT

            offs[i] = Math.random()
        }
        return [pos, dirs, offs]
    }, [HEIGHT_LIMIT])

    useFrame((state, delta) => {
        if (!points.current) return
        const posAttr = points.current.geometry.attributes.position
        const positions = posAttr.array as Float32Array

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3
            const angle = directions[i * 2]
            const expSpeed = directions[i * 2 + 1]

            const speed = (60 + Math.sin(offsets[i]) * 50) * delta

            positions[i3 + 1] -= speed
            positions[i3] += Math.cos(angle) * expSpeed
            positions[i3 + 2] += Math.sin(angle) * expSpeed

            if (positions[i3 + 1] < HEIGHT_LIMIT) {
                positions[i3 + 1] = INITIAL_Y
                positions[i3] = 0
                positions[i3 + 2] = 0
            }
        }
        posAttr.needsUpdate = true

        points.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 20) * 0.05)
    })

    return (
        <group position={position}>
            <points ref={points}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[particles, 3]}
                        count={PARTICLE_COUNT}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={1.6}
                    color="#006aff"
                    transparent
                    opacity={0.4}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    sizeAttenuation={true}
                />
            </points>

            <pointLight distance={6} intensity={8} color="#fff" position={[0, -2, 0]} />
        </group>
    )
}