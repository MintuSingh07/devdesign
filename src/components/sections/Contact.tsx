"use client"

import { motion } from "framer-motion"
import { Mail, Send, Twitter, Linkedin, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="w-full px-6 py-24 lg:px-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24">
        {/* Left Side: Info */}
        <div className="flex flex-1 flex-col gap-8 text-center lg:text-left">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Let&apos;s build something <span className="text-blue-500 italic">amazing</span> together.</h2>
            <p className="max-w-xl text-zinc-400">
              Whether you have a project in mind or just want to say hi, my inbox is always open. 
              I&apos;m always looking for new opportunities and collaborations.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-zinc-400">
            <a href="mailto:hello@example.com" className="group flex items-center justify-center gap-3 transition-colors hover:text-white lg:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors group-hover:bg-blue-600 group-hover:border-blue-500">
                <Mail className="h-5 w-5" />
              </div>
              hello@example.com
            </a>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors hover:bg-zinc-800 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors hover:bg-zinc-800 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors hover:bg-zinc-800 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-600"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-600"
              />
            </div>
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-bold text-black transition-all hover:bg-zinc-200 active:scale-95">
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
