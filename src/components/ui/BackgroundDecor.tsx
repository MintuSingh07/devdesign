"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function BackgroundDecor() {
  const [isMounted, setIsMounted] = useState(false)

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!isMounted) return null

  // Fixed set of random positions to avoid hydration mismatch
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    left: `${(i * 17) % 100}%`,
    top: `${(i * 23) % 100}%`,
    duration: 5 + (i % 5),
    delay: i % 3
  }))

  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-[#030303]">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Spotlight from top */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[800px] w-[1000px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-60 pointer-events-none" />

      {/* Mouse Follow Glow */}
      <motion.div
        animate={{
          x: mousePos.x - 400,
          y: mousePos.y - 400,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 80,
          mass: 1,
        }}
        className="pointer-events-none absolute h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_60%)] blur-[80px]"
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Stars/Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0.2,
            scale: 0.5
          }}
          animate={{
            y: ["-20px", "20px", "-20px"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-white/40 shadow-[0_0_8px_white/20]"
          style={{ left: p.left, top: p.top }}
        />
      ))}

      {/* Large Glowing Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -70, 90, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[10%] top-[35%] h-[600px] w-[600px] rounded-full bg-purple-600/[0.08] blur-[150px]"
      />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-blue-600/[0.05] to-transparent blur-[60px]" />

      {/* Light Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[30%] h-[140%] w-[1px] -rotate-[35deg] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
        <div className="absolute top-[-20%] left-[70%] h-[140%] w-[1px] -rotate-[35deg] bg-gradient-to-b from-transparent via-purple-500/10 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.2)]" />
      </div>

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </div>
  )
}
