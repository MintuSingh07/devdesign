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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full w-full bg-black border-b border-zinc-800 px-6 py-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-white px-6 text-base font-bold text-black transition-all hover:bg-zinc-200"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
