"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Rocket } from "lucide-react"

export function ShuttleAnimation() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="h-64 w-64" />

  return (
    <div className="relative h-64 w-64 sm:h-72 sm:w-72 flex items-center justify-center">
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
        className="absolute h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-blue-500/20 blur-2xl sm:blur-3xl"
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
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileHover={{ scale: 1.1, cursor: "grab" }}
        whileTap={{ scale: 0.9, cursor: "grabbing" }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10"
      >
        <div className="relative group">
          <Rocket className="h-24 w-24 sm:h-32 sm:w-32 text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all group-hover:text-blue-300 group-hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.8)]" />
          
          {/* Main Thruster Flame */}
          <motion.div
            animate={{
              height: [10, 20, 10],
              opacity: [0.6, 1, 0.6],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
            }}
            className="absolute -bottom-5 sm:-bottom-7 left-1/2 -translate-x-1/2 w-4 sm:w-6 bg-gradient-to-b from-blue-400 via-blue-600 to-transparent rounded-full blur-[2px] sm:blur-[3px]"
          />

          {/* Side Thrusters */}
          <motion.div
            animate={{
              height: [6, 10, 6],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              delay: 0.05,
            }}
            className="absolute -bottom-1 sm:-bottom-2 left-4 sm:left-5 w-2 sm:w-2.5 bg-blue-300/40 rounded-full blur-[1px] sm:blur-[2px]"
          />
          <motion.div
            animate={{
              height: [6, 10, 6],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              delay: 0.1,
            }}
            className="absolute -bottom-1 sm:-bottom-2 right-4 sm:right-5 w-2 sm:w-2.5 bg-blue-300/40 rounded-full blur-[1px] sm:blur-[2px]"
          />
        </div>
      </motion.div>
    </div>
  )
}
