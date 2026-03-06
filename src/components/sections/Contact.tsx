"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Send, Linkedin, Instagram, CheckCircle2 } from "lucide-react"

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format WhatsApp message
    const phoneNumber = "918597003989" // Removed the + for the WhatsApp API link
    const textMessage = formData.message.trim() === ""
      ? `Hi Mintu! I'm ${formData.name}. I'd like to connect with you.`
      : formData.message

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', message: '' }) // Reset form
      setTimeout(() => setIsSuccess(false), 5000)
    }, 800)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="w-full px-6 py-24 lg:px-24 relative overflow-hidden">
      {/* Section Ambient Glow */}
      <div className="absolute top-1/2 left-[-100px] -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[80%] right-[-100px] w-[1000px] h-[600px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24 relative z-10">
        {/* Left Side: Info */}
        <div className="flex flex-1 flex-col gap-8 sm:gap-12 text-center lg:text-left">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-[1.05] sm:leading-[1.1] font-display">Let&apos;s build something <span className="text-blue-500 italic">amazing</span> together.</h2>
            <p className="max-w-xl text-base sm:text-lg text-zinc-400 font-medium font-sans mx-auto lg:mx-0">
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 text-zinc-400 font-sans w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
            <a href="mailto:mintusingh2006j@gmail.com" className="group flex items-center justify-center gap-3 sm:gap-4 transition-colors hover:text-white lg:justify-start bg-white/5 lg:bg-transparent py-4 px-6 lg:p-0 rounded-2xl lg:rounded-none border border-white/5 lg:border-transparent">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 transition-colors group-hover:bg-blue-600 group-hover:border-blue-500 shadow-lg">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <span className="text-base sm:text-lg font-medium truncate">mintusingh2006j@gmail.com</span>
            </a>
            <div className="flex items-center justify-center gap-4 sm:gap-5 lg:justify-start">
              <a href="https://wa.me/918597003989" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 transition-colors hover:bg-green-600 hover:text-white hover:border-green-500 shadow-lg">
                <WhatsappIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://www.linkedin.com/in/mintu-singh-z" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 transition-colors hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] shadow-lg">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 transition-colors hover:bg-pink-600 hover:text-white hover:border-pink-500 shadow-lg">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 w-full mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-6 sm:gap-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-5 sm:p-10 backdrop-blur-md shadow-2xl overflow-hidden"
          >
            {/* Form Ambient Light */}
            <div className="absolute -right-20 -top-20 h-64 w-64 bg-green-600/10 blur-[80px] rounded-full pointer-events-none" />

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white font-display">Redirecting to WhatsApp!</h3>
                  <p className="text-zinc-400 font-sans">Continue the conversation there.</p>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
                  <div className="flex flex-col gap-2 sm:gap-3 font-sans">
                    <label className="ml-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Name</label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-5 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-green-500/50 focus:bg-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-3 font-sans">
                    <label className="ml-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-2xl border border-white/5 bg-white/5 px-6 py-5 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-green-500/50 focus:bg-white/10"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex h-14 sm:h-16 w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] font-bold text-white transition-all hover:bg-[#128C7E] hover:shadow-2xl hover:shadow-green-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-display mt-2 sm:mt-0"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Opening WhatsApp..." : "Send on WhatsApp"}
                    </span>
                    {!isSubmitting && <Send className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

