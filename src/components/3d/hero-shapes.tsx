"use client"

import { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model() {
    const gltf = useGLTF('/assets/models/hero.glb')
    const scene = gltf.scene

    if (!scene) return null

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

    useFrame(() => {
        scene.rotation.y += 0.01
        scene.rotation.x += 0.005
    })

    return <primitive object={scene} scale={0.5} />
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
