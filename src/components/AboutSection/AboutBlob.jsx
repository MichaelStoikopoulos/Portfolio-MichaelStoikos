import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'

const Blob = () => {
  const mesh = useRef(null)
  const pointer = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    pointer.current.x = state.pointer.x
    pointer.current.y = state.pointer.y
    if (!mesh.current) return
    mesh.current.rotation.y += delta * 0.18
    mesh.current.rotation.x += (pointer.current.y * 0.6 - mesh.current.rotation.x) * 0.04
    mesh.current.rotation.z += (pointer.current.x * -0.3 - mesh.current.rotation.z) * 0.04
  })

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={mesh} scale={1.3}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#3aa8ff"
          emissive="#0a3a5c"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.6}
          distort={0.42}
          speed={2.2}
        />
      </mesh>
    </Float>
  )
}

const AboutBlob = () => {
  return (
    <Canvas
      className="about-canvas"
      camera={{ position: [0, 0, 4.5], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#8fe3ff" />
      <pointLight position={[-4, -3, -2]} intensity={20} color="#3aa8ff" />
      <pointLight position={[0, -4, 3]} intensity={15} color="#ffffff" />
      <Blob />
    </Canvas>
  )
}

export default AboutBlob
