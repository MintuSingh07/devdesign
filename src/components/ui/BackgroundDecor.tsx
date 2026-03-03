"use client"

import { motion } from "framer-motion"

export function BackgroundDecor() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-[#030303]">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 120, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[10%] top-[40%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[10%] left-[30%] h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[120px]"
      />

      {/* Aesthetic Light Beams (Subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] left-[20%] h-[150%] w-[1px] -rotate-[35deg] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
        <div className="absolute -top-[20%] left-[60%] h-[150%] w-[1px] -rotate-[35deg] bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      </div>
    </div>
  )
}
