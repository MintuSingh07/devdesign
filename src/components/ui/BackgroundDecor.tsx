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
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-[#020204]">
      {/* Base Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#020204] to-[#020204] pointer-events-none" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Spotlight from top */}
      <div className="absolute left-1/2 top-[-100px] -translate-x-1/2 h-[1400px] w-[1800px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.5)_0%,transparent_60%)] opacity-80 pointer-events-none" />

      {/* Mouse Follow Glow */}
      <motion.div
        animate={{
          x: mousePos.x - 400,
          y: mousePos.y - 400,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 70,
          mass: 1,
        }}
        className="pointer-events-none absolute h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3)_0%,transparent_50%)] blur-[100px]"
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
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
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)]"
          style={{ left: p.left, top: p.top }}
        />
      ))}

      {/* Large Glowing Orbs (Nebula Effect) */}
      <motion.div
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -80, 80, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[2%] top-[10%] h-[900px] w-[900px] rounded-full bg-blue-700/[0.08] blur-[160px]"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 140, 0],
          y: [0, 120, -100, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[-10%] top-[40%] h-[1000px] w-[1000px] rounded-full bg-purple-700/[0.08] blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[30%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/[0.06] blur-[140px]"
      />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.15)_0%,transparent_70%)] blur-[50px] pointer-events-none" />

      {/* Section Specific Glows */}
      <div className="absolute top-[25%] left-[-10%] h-[700px] w-[700px] bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute top-[55%] right-[-10%] h-[800px] w-[800px] bg-purple-500/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute top-[85%] left-[15%] h-[700px] w-[700px] bg-blue-700/[0.05] blur-[120px] pointer-events-none" />

      {/* Floating Outlines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{
            rotate: 360,
            y: [0, -40, 0],
          }}
          transition={{
            rotate: { duration: 70, repeat: Infinity, ease: "linear" },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute left-[8%] top-[15%] h-80 w-80 border border-blue-500/15 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            y: [0, 50, 0],
          }}
          transition={{
            rotate: { duration: 90, repeat: Infinity, ease: "linear" },
            y: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute right-[12%] bottom-[15%] h-[400px] w-[400px] border border-purple-500/15 rounded-lg"
        />
      </div>

      {/* Animated Light Beams - Stronger */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
        <motion.div
          animate={{
            x: ["-15%", "15%", "-15%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-30%] left-[25%] h-[160%] w-[1.5px] -rotate-[35deg] bg-gradient-to-b from-transparent via-blue-400/60 to-transparent shadow-[0_0_40px_rgba(59,130,246,0.8)]"
        />
        <motion.div
          animate={{
            x: ["15%", "-15%", "15%"],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-30%] left-[75%] h-[160%] w-[1.5px] -rotate-[35deg] bg-gradient-to-b from-transparent via-purple-400/30 to-transparent shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        />
        <motion.div
          animate={{
            opacity: [0, 0.2, 0],
            x: ["-5%", "5%", "-5%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-30%] left-[55%] h-[160%] w-[3px] -rotate-[35deg] bg-gradient-to-b from-transparent via-blue-200/20 to-transparent blur-[4px]"
        />
      </div>

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
    </div>
  )
}
