"use client"

import { motion } from "framer-motion"
import { ShuttleAnimation } from "./ShuttleAnimation"
import { Terminal, Code, Layout, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 pt-32 pb-20 lg:flex-row lg:gap-16 lg:px-24 overflow-hidden">
          {/* Hero Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1000px] bg-blue-600/15 blur-[180px] rounded-full pointer-events-none -z-10 hidden sm:block" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10 sm:hidden" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10 sm:hidden" />
        
        {/* Content */}
        <div className="z-10 flex flex-col items-center gap-8 text-center lg:items-start lg:text-left w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] sm:text-sm font-semibold text-blue-400 backdrop-blur-md shadow-xl shadow-blue-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            AVAILABLE FOR NEW PROJECTS
          </motion.div>
  
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-4xl bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-[2.5rem] leading-[1.1] font-black tracking-tight text-transparent sm:text-7xl sm:leading-[1.1] font-display"
              >
                Designing <span className="text-blue-500">Aesthetics</span>,<br className="hidden sm:block" /> Developing <span className="text-blue-500">Impact</span>.
              </motion.h1>
  
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-base sm:text-lg text-zinc-400/80 font-medium leading-relaxed font-sans px-2 sm:px-0 mt-2 sm:mt-0"
            >
              Bridging the gap between pixel-perfect design and high-performance code. 
              <span className="hidden sm:inline"> Delivering premium digital experiences.</span>
              <span className="sm:hidden"> High-end digital experiences.</span>
            </motion.p>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:justify-start mt-8 w-full sm:w-auto"
            >
              <button className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-10 font-bold text-black transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-white/10 overflow-hidden font-display">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-blue-50 opacity-0 transition-opacity group-hover:opacity-100" />
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="flex w-full sm:w-auto items-center justify-center gap-6 px-8 py-3.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">
                <motion.div 
                  whileHover={{ y: -4, color: "#3b82f6" }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 cursor-pointer transition-colors text-zinc-400" title="Developer"
                >
                  <Code className="h-6 w-6 sm:h-5 sm:w-5" />
                </motion.div>
                <div className="h-4 w-px bg-white/10" />
                <motion.div 
                  whileHover={{ y: -4, color: "#a855f7" }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 cursor-pointer transition-colors text-zinc-400" title="Designer"
                >
                  <Layout className="h-6 w-6 sm:h-5 sm:w-5" />
                </motion.div>
                <div className="h-4 w-px bg-white/10" />
                <motion.div 
                  whileHover={{ y: -4, color: "#22c55e" }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 cursor-pointer transition-colors text-zinc-400" title="Terminal"
                >
                  <Terminal className="h-6 w-6 sm:h-5 sm:w-5" />
                </motion.div>
              </div>
            </motion.div>
        </div>

      {/* Shuttle Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-8 lg:mt-0"
      >
        <ShuttleAnimation />
      </motion.div>
    </section>
  )
}
