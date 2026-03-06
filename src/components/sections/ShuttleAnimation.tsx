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
      {/* Background Glow - Replaced blur with radial gradient */}
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
        className="absolute h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] will-change-transform"
      />

      {/* Stars/Particles - Reduced count */}
      {[...Array(3)].map((_, i) => (
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
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10 will-change-transform"
      >
        <div className="relative group">
          {/* Replaced expensive drop-shadow with simple text coloring and an under-glow div */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_70%)] rounded-full -z-10 group-hover:bg-[radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_70%)] transition-all opacity-50 will-change-transform" />
          <Rocket className="h-24 w-24 sm:h-32 sm:w-32 text-blue-400 transition-all group-hover:text-blue-300 relative z-10" />

          {/* Optimized Thruster Flames */}
          <motion.div
            animate={{
              height: [12, 18, 12],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-5 sm:-bottom-7 left-1/2 -translate-x-1/2 w-4 sm:w-6 bg-blue-500/60 rounded-full will-change-[height,opacity,transform]"
          />
        </div>
      </motion.div>
    </div>
  )
}
