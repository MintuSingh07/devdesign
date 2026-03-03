"use client"

import { motion } from "framer-motion"
import { Rocket } from "lucide-react"

export function ShuttleAnimation() {
  return (
    <div className="relative h-64 w-64 flex items-center justify-center">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"
      />
      
      {/* Stars/Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Shuttle (Rocket Icon) */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10 cursor-grab active:cursor-grabbing"
      >
        <div className="relative">
          <Rocket className="h-24 w-24 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
          
          {/* Flame */}
          <motion.div
            animate={{
              height: [10, 20, 10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
            }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 bg-orange-500 rounded-full blur-[2px]"
          />
        </div>
      </motion.div>
    </div>
  )
}
