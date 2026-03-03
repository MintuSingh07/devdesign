"use client"

import { motion } from "framer-motion"
import { ShuttleAnimation } from "./ShuttleAnimation"
import { Terminal, Code, Layout, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-6 pt-20 lg:flex-row lg:gap-16 lg:px-24">
      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
          </span>
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
        >
          UI/UX Designer & <span className="text-blue-500">Website Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg text-zinc-400"
        >
          Crafting high-performance websites and stunning user interfaces with 2+ years of professional experience. 
          Bridging the gap between aesthetics and functionality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
        >
          <button className="group flex h-12 items-center gap-2 rounded-full bg-blue-600 px-8 font-medium text-white transition-all hover:bg-blue-700 active:scale-95">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="flex items-center gap-6 border-l border-zinc-800 pl-6 text-zinc-500">
            <div className="flex items-center gap-2" title="Developer">
              <Code className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2" title="Designer">
              <Layout className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2" title="Terminal">
              <Terminal className="h-5 w-5" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Shuttle Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-12 lg:mt-0"
      >
        <ShuttleAnimation />
      </motion.div>
    </section>
  )
}
