"use client"

import { Suspense, useRef, useEffect, useMemo } from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Group, MeshStandardMaterial, Mesh } from 'three'

useGLTF.preload("/assets/models/hero.glb")

function Model() {
  const { scene } = useGLTF("/assets/models/hero.glb")
  const meshRef = useRef<Group>(null)

  const optimizedMaterial = useMemo(
    () => new MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
      metalness: 0.2,
    }),
    []
  )

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.005
    }
  })

  useEffect(() => {
    if (!scene) return

    scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.material = optimizedMaterial
        object.castShadow = true
        object.receiveShadow = true
      }
    })

    return () => {
      optimizedMaterial.dispose()
      scene.traverse((object) => {
        if (object instanceof Mesh && object.geometry) {
          object.geometry.dispose()
        }
      })
    }
  }, [scene, optimizedMaterial])

  if (!scene) return null

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={0.5} />
    </group>
  )
}

export default function Shapes3D() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[512, 512]}
        />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
          makeDefault
        />
      </Canvas>
    </div>
  )
}
