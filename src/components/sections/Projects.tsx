"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Palette, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

type ProjectType = "web" | "ui"

interface Project {
  id: string
  title: string
  description: string
  type: ProjectType
  image: string
  tags: string[]
  links: {
    github?: string
    demo?: string
  }
}

const projects: Project[] = [
  // Web Projects
  {
    id: "w1",
    title: "Fashion Corner",
    description: "An ecommerce website built on Next.js, featuring a modern, fast, and responsive shopping experience.",
    type: "web",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "E-commerce", "React"],
    links: { demo: "https://fashion-corner.vercel.app" },
  },
  {
    id: "w2",
    title: "Nexus Chat",
    description: "A Full Stack real-time chat application built on Next.js, designed for seamless communication.",
    type: "web",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Full Stack", "WebSockets"],
    links: { demo: "https://nexus-dk.vercel.app" },
  },
  {
    id: "w3",
    title: "Sozori",
    description: "An e-commerce platform specializing in designing aesthetic and premium lamps.",
    type: "web",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?auto=format&fit=crop&q=80&w=800",
    tags: ["E-commerce", "Interior Design", "Web"],
    links: { demo: "https://sozori.com" },
  },
  {
    id: "w4",
    title: "Pratima Jewellers",
    description: "A premium jewellery website offering wholesale high-quality crystals, yantras, and decoratives.",
    type: "web",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    tags: ["E-commerce", "Premium", "Business"],
    links: { demo: "https://pratimajewellers.in" },
  },
  // UI/UX Projects
  {
    id: "u1",
    title: "TP-HOST-REDESIGN",
    description: "A high-fidelity infrastructure redesign focused on cloud-hosting scalability. Optimized information architecture and user flows to enhance conversion rates through a data-driven UI strategy.",
    type: "ui",
    image: "https://www.figma.com/file/HpZAg5jSAywh4mMXyzevId/thumbnail?ver=thumbnails/c00daa8c-eb25-470e-9cc0-be7c0f129a8b&t=rcDgIb8YAZwQpoDr-0",
    tags: ["SaaS UI", "Scalability", "UX Strategy"],
    links: { demo: "https://www.figma.com/design/HpZAg5jSAywh4mMXyzevId/TP-HOST-REDESIGN?node-id=0-1&p=f&t=rcDgIb8YAZwQpoDr-0" },
  },
  {
    id: "u2",
    title: "Shop.Co-Ecommerce",
    description: "A next-generation B2C e-commerce interface prioritizing seamless user journeys and conversion optimization. Leverages a robust design system to drive digital engagement.",
    type: "ui",
    image: "https://www.figma.com/file/HnkxdHr7LLiAwPwxR3mXRL/thumbnail?ver=thumbnails%2Fd3a01bb5-ac8c-4629-ab2a-270b2e84d873&t=oXHAIZxvBUh6xET5-0",
    tags: ["E-commerce", "Conversion", "UX/UI"],
    links: { demo: "https://www.figma.com/design/HnkxdHr7LLiAwPwxR3mXRL/Shop.Co-Ecommerce?node-id=0-1&p=f&t=oXHAIZxvBUh6xET5-0" },
  },
  {
    id: "u3",
    title: "Duevion",
    description: "Comprehensive brand identity and digital product ecosystem. Engineered a cohesive visual language that balances modern aesthetics with functional UX across all touchpoints.",
    type: "ui",
    image: "https://www.figma.com/file/UnhUfSmBda8GkzbkgtuEQa/thumbnail?ver=thumbnails%2F6358c752-4ce9-47e2-b376-f9d414a35058&t=eqGWvJWn7h6quyEY-0",
    tags: ["Branding", "Product Design", "Visual Identity"],
    links: { demo: "https://www.figma.com/design/UnhUfSmBda8GkzbkgtuEQa/Duevion?node-id=0-1&p=f&t=eqGWvJWn7h6quyEY-0" },
  },
  {
    id: "u4",
    title: "Course-Selling-Web-Responsive-Design",
    description: "An end-to-end EdTech platform meticulously crafted for multi-device accessibility. Implements a responsive grid-system and intuitive navigation to facilitate immersive learning.",
    type: "ui",
    image: "https://www.figma.com/file/QXNFdVQo7VbXgZhXaTSzyV/thumbnail?ver=thumbnails/eb0b33fb-491e-4569-9bd6-c1fdf7526d6f&t=O58952c5nrENvs9P-0",
    tags: ["EdTech UI", "Responsive", "LMS Design"],
    links: { demo: "https://www.figma.com/design/QXNFdVQo7VbXgZhXaTSzyV/Course-Selling-Web--Responsive-Design-?node-id=1-2&p=f&t=O58952c5nrENvs9P-0" },
  },
]

function ProjectsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [category, setCategory] = useState<ProjectType>("web")

  useEffect(() => {
    const c = searchParams.get("c")
    if (c === "ui") setCategory("ui")
    else if (c === "web") setCategory("web")
  }, [searchParams])

  const handleCategoryChange = (newCategory: ProjectType) => {
    setCategory(newCategory)
    const params = new URLSearchParams(searchParams.toString())
    params.set("c", newCategory)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const filteredProjects = projects.filter((p) => p.type === category)

  return (
    <div className="flex flex-col items-center gap-12 relative">
      {/* Section Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-display">Featured Works</h2>
        <p className="max-w-xl text-zinc-400 font-sans">
          A curated selection of my professional projects across web development and UI/UX design.
        </p>
      </div>

      {/* Capsule Switcher */}
      <div className="relative flex w-full max-w-[320px] rounded-full bg-zinc-900 p-1 border border-zinc-800 shadow-2xl font-display overflow-hidden">
        <motion.div
          className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-blue-600"
          animate={{
            x: category === "web" ? 0 : "100%",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
        <button
          onClick={() => handleCategoryChange("web")}
          className={`relative z-10 flex h-10 flex-1 items-center justify-center gap-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${category === "web" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
        >
          <Globe className="h-4 w-4 flex-shrink-0" />
          <span className="xs:inline">Web Projects</span>
        </button>
        <button
          onClick={() => handleCategoryChange("ui")}
          className={`relative z-10 flex h-10 flex-1 items-center justify-center gap-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${category === "ui" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
        >
          <Palette className="h-4 w-4 flex-shrink-0" />
          <span className="xs:inline">UI/UX Designs</span>
        </button>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/40 backdrop-blur-md transition-all hover:border-blue-500/20 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] will-change-transform"
            >
              {/* Border Beam Effect (Hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-[-2px] rounded-[2rem] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm animate-pulse" />
              </div>

              <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                <div className="mb-3 sm:mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">
                  {project.title}
                </h3>
                <p className="mb-6 sm:mb-8 text-sm leading-relaxed text-zinc-400/80 font-sans">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
                        <span className="relative">
                          Live Preview
                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover/link:w-full" />
                        </span>
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
                        <span className="relative">
                          Source Code
                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-zinc-500 transition-all duration-300 group-hover/link:w-full" />
                        </span>
                        <Github className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-24 lg:px-24 scroll-mt-24">
      <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-3xl bg-zinc-900" />}>
        <ProjectsContent />
      </Suspense>
    </section>
  )
}
