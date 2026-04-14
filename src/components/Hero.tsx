import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { useTranslation } from 'react-i18next'

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3D Scene — Centered Object with Floor
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function FusedTorusKnot() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // Elegant, slow rotation so the light refracts beautifully through the custom shape
    groupRef.current.rotation.y = t * 0.15
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1 + 0.2
    groupRef.current.rotation.z = Math.cos(t * 0.15) * 0.1
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
      {/* By using a TorusKnot with p=1 and q=3, we create a continuous ribbon 
        that twists 3 times, creating beautiful "crescent cutouts" natively. 
      */}
      <group ref={groupRef} position={[0, -0.2, 0]} scale={1.2}>

        {/* The Glassy Outer Shell */}
        <mesh>
          <torusKnotGeometry args={[1, 0.45, 256, 64, 1, 3]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={1.5}
            thickness={1}
            roughness={0.05}
            transmission={1}
            ior={1.4}
            chromaticAberration={0.03}
            transparent={true}
            color="#4f46e5"
            resolution={1024}
          />
        </mesh>

        {/* The Glowing Hot Core Inside */}
        <mesh scale={0.92}>
          <torusKnotGeometry args={[1, 0.45, 128, 64, 1, 3]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#fb923c"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </group>
    </Float>
  )
}

function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#c084fc" />
      <directionalLight position={[-5, -2, 5]} intensity={1.5} color="#fb923c" />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <FusedTorusKnot />

        {/* Soft floor shadow to give that studio / grounded feel */}
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.8}
          scale={15}
          blur={3}
          far={5}
          color="#0f172a"
        />
      </Suspense>
    </Canvas>
  )
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Hero Layout — Unified Center Style
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="relative w-full h-screen overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 40%, #1e1b4b 100%)',
      }}
    >
      {/* Background radial highlight */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.25) 0%, transparent 60%)'
        }}
      />

      {/* 3D Canvas (Centered) */}
      <HeroScene />

      {/* Overlay Content Box */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1
            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tight text-white leading-[0.95] drop-shadow-2xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            CRISTIANO
            <br />
            BELLUCCI
          </h1>

          <div className="mt-8 flex gap-6 pointer-events-auto">
            <a
              href="#specialties"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium text-sm tracking-widest uppercase hover:bg-white hover:text-indigo-900 transition-colors"
            >
              {t('hero.cta_primary')}
            </a>
          </div>
        </motion.div>

        {/* Right side floating vertical text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex gap-8 items-center"
        >
          <div
            className="flex flex-col gap-16"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <div className="flex items-center gap-4">
              <span className="text-white/80 font-mono text-xs tracking-[0.3em] uppercase">
                {t('hero.tag1')}
              </span>
              <div className="w-px h-8 bg-white/30" />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white/80 font-mono text-xs tracking-[0.3em] uppercase">
                {t('hero.tag2')}
              </span>
              <div className="w-px h-8 bg-white/30" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Decorative footer elements */}
      <div className="absolute bottom-10 left-0 w-full px-6 md:px-12 flex justify-between items-center z-10 pointer-events-none text-white/50 font-mono text-[10px] tracking-widest uppercase">
        <span>© {new Date().getFullYear()} CRISTIANO BELLUCCI</span>
        <span>{t('hero.rights')}</span>
        <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-white/20" />
      </div>

    </section>
  )
}