"use client"

import { motion } from "framer-motion"
import { Mail, Send, Twitter, Linkedin, Instagram } from "lucide-react"

export function Contact() {
    return (
      <section id="contact" className="w-full px-6 py-24 lg:px-24 relative overflow-hidden">
        {/* Section Ambient Glow */}
        <div className="absolute top-1/2 left-[-100px] -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[80%] right-[-100px] w-[1000px] h-[600px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24 relative z-10">
          {/* Left Side: Info */}
          <div className="flex flex-1 flex-col gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-[1.1] font-display">Let&apos;s build something <span className="text-blue-500 italic">amazing</span> together.</h2>
                <p className="max-w-xl text-lg text-zinc-400 font-medium font-sans">
                Whether you have a project in mind or just want to say hi, my inbox is always open. 
                I&apos;m always looking for new opportunities and collaborations.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-zinc-400 font-sans">

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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex flex-col gap-8 rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-10 backdrop-blur-md shadow-2xl"
            >
              {/* Form Ambient Light */}
              <div className="absolute -right-20 -top-20 h-64 w-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:bg-white/10"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:bg-white/10"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">How can I help?</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full resize-none rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:bg-white/10"
                />
              </div>
              <button className="group relative flex h-14 items-center justify-center gap-3 rounded-2xl bg-blue-600 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20 active:scale-[0.98] overflow-hidden">
                <span className="relative z-10">Send Message</span>
                <Send className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </motion.div>
          </div>
      </div>
    </section>
  )
}
