"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500 rounded-full border border-white/5 ${
        scrolled ? "bg-black/60 py-3 backdrop-blur-2xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)]" : "bg-transparent py-5"
      }`}
    >
        <div className="mx-auto flex items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tighter text-white transition-opacity hover:opacity-80 font-display">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-500/20">
              <Code className="h-4 w-4 text-white" />
            </div>
            <span>Dev<span className="text-blue-500">Design</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-2 md:flex font-sans">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-400 transition-all hover:text-white hover:bg-white/5 rounded-full"
              >
                {link.name}
              </a>
            ))}
            <div className="ml-2 h-4 w-px bg-zinc-800" />
            <a
              href="#contact"
              className="ml-2 flex h-9 items-center justify-center rounded-full bg-blue-600 px-6 text-xs font-bold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.1)] font-display"
            >
              Hire Me
            </a>
          </div>


        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              className="absolute left-0 top-[calc(100%+1rem)] w-full overflow-hidden rounded-[2.5rem] bg-zinc-900/90 border border-white/10 p-2 backdrop-blur-2xl md:hidden shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
            >
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4 px-6 py-5 rounded-2xl text-xl font-bold text-zinc-400 transition-all hover:text-white hover:bg-white/5 active:bg-white/10"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-500 opacity-0 transition-all group-hover:opacity-100 group-hover:scale-125" />
                    {link.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 p-2"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex h-16 items-center justify-center rounded-[1.5rem] bg-blue-600 px-6 text-lg font-black text-white transition-all hover:bg-blue-500 active:scale-[0.98] shadow-xl shadow-blue-600/20"
                  >
                    Hire Me
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

    </nav>
  )
}
