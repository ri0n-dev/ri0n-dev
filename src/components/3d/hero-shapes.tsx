"use client"

import { Suspense, useRef, useEffect, useMemo, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { type Group, MeshStandardMaterial, Mesh } from "three"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

useGLTF.preload("/assets/models/hero.glb")

interface ModelProps {
  isRotating: boolean
}

function Model({ isRotating }: ModelProps) {
  const { scene } = useGLTF("/assets/models/hero.glb")
  const meshRef = useRef<Group>(null)

  const optimizedMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.8,
        metalness: 0.2,
      }),
    [],
  )

  useFrame(() => {
    if (meshRef.current && isRotating) {
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
  const [isRotating, setIsRotating] = useState(true)

  const toggleRotation = () => {
    setIsRotating(!isRotating)
  }

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow shadow-mapSize={[512, 512]} />

        <Suspense fallback={null}>
          <Model isRotating={isRotating} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={isRotating}
          autoRotateSpeed={1}
          makeDefault
        />
      </Canvas>

      <Button
        onClick={toggleRotation}
        variant="ghost"
        className="absolute top-4 right-4 z-10 rounded-3xl hover:bg-white/10 text-white/60 hover:text-white/70"
        size="sm"
      >
        {isRotating ? (
          <>
            <Pause className="w-4 h-4 mr-2" />
            Stop
          </>
        ) : (
          <>
            <Play className="w-4 h-4 mr-2" />
            Play
          </>
        )}
      </Button>
    </div>
  )
}
