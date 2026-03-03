"use client"

import { motion } from "framer-motion"
import { ShuttleAnimation } from "./ShuttleAnimation"
import { Terminal, Code, Layout, ArrowRight, MousePointer2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-6 pt-24 pb-12 lg:flex-row lg:gap-16 lg:px-24 overflow-hidden">
      {/* Background Ambience - Refined */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full sm:block hidden" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Hero Content */}
      <div className="z-10 flex flex-col items-center gap-6 text-center lg:items-start lg:text-left w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-medium text-blue-400 backdrop-blur-md shadow-lg shadow-blue-500/5"
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
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-[2.25rem] leading-[1.1] font-black tracking-tight text-transparent sm:text-[4.5rem] lg:text-[5rem] sm:leading-[1] font-display"
        >
          Designing <span className="text-blue-500 relative inline-block">
            Aesthetics
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-1 left-0 h-1 bg-blue-500/30 rounded-full"
            />
          </span>,
          <br className="hidden lg:block" /> Developing <span className="text-blue-500 relative inline-block">
            Impact
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -bottom-1 left-0 h-1 bg-blue-500/30 rounded-full"
            />
          </span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl text-base sm:text-lg text-zinc-400 font-medium leading-relaxed font-sans px-2 sm:px-0"
        >
          Bridging the gap between pixel-perfect design and high-performance code. 
          <span className="hidden sm:inline"> I craft premium digital experiences for forward-thinking brands.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:justify-start mt-8 w-full sm:w-auto"
        >
          <button className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-white px-10 font-bold text-black transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] overflow-hidden font-display">
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-blue-50 opacity-0 transition-opacity group-hover:opacity-100" />
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="flex w-full sm:w-auto items-center justify-center gap-4 px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/10">
            <motion.div 
              whileHover={{ y: -3, color: "#3b82f6" }}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all text-zinc-400" title="Developer"
            >
              <Code className="h-5 w-5" />
            </motion.div>
            <div className="h-6 w-px bg-white/10" />
            <motion.div 
              whileHover={{ y: -3, color: "#a855f7" }}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all text-zinc-400" title="Designer"
            >
              <Layout className="h-5 w-5" />
            </motion.div>
            <div className="h-6 w-px bg-white/10" />
            <motion.div 
              whileHover={{ y: -3, color: "#22c55e" }}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all text-zinc-400" title="Fullstack"
            >
              <Terminal className="h-5 w-5" />
            </motion.div>
            <div className="h-6 w-px bg-white/10 sm:hidden" />
            <motion.div 
              whileHover={{ y: -3, color: "#f97316" }}
              className="sm:hidden flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all text-zinc-400" title="UX Focus"
            >
              <MousePointer2 className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Visual Element - Improved Shuttle Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="relative mt-16 lg:mt-0 flex items-center justify-center w-full lg:w-1/2"
      >
        <div className="relative">
          {/* Circular Ornament */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[450px] sm:h-[450px] border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[350px] sm:h-[350px] border border-blue-500/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-80 sm:h-80 bg-blue-600/10 blur-[80px] rounded-full" />
          
          <ShuttleAnimation />
        </div>
      </motion.div>
    </section>
  )
}
