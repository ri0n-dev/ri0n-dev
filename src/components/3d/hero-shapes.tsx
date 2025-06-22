"use client"

import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef, useCallback, useMemo, useEffect } from "react"

useGLTF.preload("/assets/models/hero.glb")

function Model() {
    const gltf = useGLTF("/assets/models/hero.glb")
    const meshRef = useRef<THREE.Group>(null)

    const optimizedMaterial = useMemo(
        () =>
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0.8,
                metalness: 0.2,
            }),
        [],
    )

    const animate = useCallback(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01
            meshRef.current.rotation.x += 0.005
        }
    }, [])

    useFrame(animate)

    useEffect(() => {
        if (!gltf.scene) return

        gltf.scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                object.material = optimizedMaterial
                object.castShadow = true
                object.receiveShadow = true
            }
        })

        return () => {
            optimizedMaterial.dispose()
        }
    }, [gltf.scene, optimizedMaterial])

    if (!gltf.scene) return null

    return (
        <group ref={meshRef}>
            <primitive object={gltf.scene} scale={0.5} />
        </group>
    )
}

export default function Shapes3D() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.3} />

                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.2}
                    castShadow
                />

                <pointLight position={[-10, -10, -5]} intensity={0.5} />

                <Suspense fallback={null}>
                    <Model />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={1}
                />
            </Canvas>
        </div>
    )
}