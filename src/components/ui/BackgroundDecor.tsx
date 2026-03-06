"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function BackgroundDecor() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  // Animated particles for stars
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 23) % 100}%`,
    duration: 6 + (i % 8),
    delay: i % 5,
    size: Math.max(1, (i % 3) + 1),
  }))

  return (
    <div className="fixed inset-0 z-0 h-full w-full overflow-hidden bg-[#030305] pointer-events-none">

      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010204] via-[#05060A] to-[#010103] pointer-events-none" />

      {/* Grid Overlay with Faded Edges */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_80%)]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Aurora Blobs (Slow and Smooth) */}
      <motion.div
        animate={{
          x: ["0vw", "10vw", "-10vw", "0vw"],
          y: ["0vh", "-10vh", "10vh", "0vh"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute left-[5%] top-[10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] will-change-transform"
      />

      <motion.div
        animate={{
          x: ["0%", "-15%", "10%", "0%"],
          y: ["0%", "15%", "-10%", "0%"],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute right-[5%] top-[20%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_70%)] will-change-transform"
      />

      <motion.div
        animate={{
          x: ["0%", "15%", "-15%", "0%"],
          y: ["0%", "20%", "-20%", "0%"],
          scale: [0.9, 1.3, 0.8, 0.9],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute left-[25%] bottom-[-20%] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,transparent_75%)] will-change-transform"
      />

      {/* Glowing Star Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            y: ["-40px", "40px", "-40px"],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] will-change-[transform,opacity]"
          style={{
            left: p.left,
            top: p.top,
            height: `${p.size}px`,
            width: `${p.size}px`
          }}
        />
      ))}

      {/* Premium Elegant Light Beams */}
      <div className="absolute inset-0 overflow-hidden mix-blend-screen pointer-events-none opacity-80">
        <motion.div
          animate={{ x: ["-5%", "15%", "-5%"], opacity: [0, 0.4, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-30%] left-[20%] h-[160%] w-[1px] -rotate-[35deg] bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[1px] will-change-[transform,opacity]"
        />
        <motion.div
          animate={{ x: ["15%", "-5%", "15%"], opacity: [0, 0.3, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-30%] left-[70%] h-[160%] w-[2px] -rotate-[35deg] bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent blur-[2px] shadow-[0_0_20px_rgba(217,70,239,0.5)] will-change-[transform,opacity]"
        />
        <motion.div
          animate={{ x: ["0%", "20%", "0%"], opacity: [0, 0.5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-30%] left-[45%] h-[160%] w-[1.5px] -rotate-[35deg] bg-gradient-to-b from-transparent via-blue-400 to-transparent blur-[1px] will-change-[transform,opacity]"
        />
      </div>

      {/* Frame / Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.8)_110%)] pointer-events-none" />
    </div>
  )
}
