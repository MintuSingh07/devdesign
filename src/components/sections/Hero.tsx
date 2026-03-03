"use client"

import { motion } from "framer-motion"
import { ShuttleAnimation } from "./ShuttleAnimation"
import { Terminal, Code, Layout, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-6 pt-20 lg:flex-row lg:gap-16 lg:px-24 overflow-hidden">
      {/* Hero Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
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
            className="max-w-4xl bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-5xl font-black tracking-tighter text-transparent sm:text-7xl leading-[1.1]"
          >
            Designing <span className="text-blue-500">Aesthetics</span>,<br className="hidden sm:block" /> Developing <span className="text-blue-500">Impact</span>.
          </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg text-zinc-400 font-medium leading-relaxed"
        >
          Bridging the gap between pixel-perfect design and high-performance code. 
          2 years of delivering premium digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 lg:justify-start mt-4"
        >
          <button className="group relative flex h-14 items-center gap-2 rounded-full bg-white px-8 font-bold text-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/5 overflow-hidden">
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-blue-50 opacity-0 transition-opacity group-hover:opacity-100" />
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="flex items-center gap-8 px-8 py-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <motion.div 
              whileHover={{ y: -4, color: "#3b82f6" }}
              className="flex items-center gap-2 cursor-pointer transition-colors" title="Developer"
            >
              <Code className="h-5 w-5" />
            </motion.div>
            <div className="h-4 w-px bg-zinc-800" />
            <motion.div 
              whileHover={{ y: -4, color: "#a855f7" }}
              className="flex items-center gap-2 cursor-pointer transition-colors" title="Designer"
            >
              <Layout className="h-5 w-5" />
            </motion.div>
            <div className="h-4 w-px bg-zinc-800" />
            <motion.div 
              whileHover={{ y: -4, color: "#22c55e" }}
              className="flex items-center gap-2 cursor-pointer transition-colors" title="Terminal"
            >
              <Terminal className="h-5 w-5" />
            </motion.div>
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
