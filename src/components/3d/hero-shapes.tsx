"use client"

import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model() {
    const gltf = useGLTF('/assets/models/hero.glb')
    const sceneRef = useRef<THREE.Group | null>(null)

    useEffect(() => {
        if (!gltf.scene) return

        const scene = gltf.scene.clone()

        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh
                mesh.material = new THREE.MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 1,
                    metalness: 2,
                })
            }
        })

        sceneRef.current = scene

        return () => {
            scene.traverse(child => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh
                    if (Array.isArray(mesh.material)) {
                        mesh.material.forEach(m => m.dispose?.())
                    } else {
                        mesh.material.dispose?.()
                    }
                    mesh.geometry.dispose()
                }
            })
        }
    }, [gltf.scene])

    useFrame(() => {
        if (sceneRef.current) {
            sceneRef.current.rotation.y += 0.01
            sceneRef.current.rotation.x += 0.005
        }
    })

    if (!sceneRef.current) return null;
    return <primitive object={sceneRef.current} scale={0.5} />
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
