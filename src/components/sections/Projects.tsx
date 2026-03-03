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
    title: "EcoSphere Web Application",
    description: "Full-stack e-commerce platform with real-time analytics and dynamic inventory management.",
    type: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "w2",
    title: "Velocity Dashboard",
    description: "Performance monitoring dashboard for high-traffic servers with visual data visualization.",
    type: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "D3.js", "Framer Motion"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "w3",
    title: "Nova CRM System",
    description: "A comprehensive customer relationship management system with AI-powered insights and lead tracking.",
    type: "web",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "w4",
    title: "StreamFlow Video Platform",
    description: "Cloud-native video streaming service with adaptive bitrate streaming and social features.",
    type: "web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "AWS S3", "FFmpeg"],
    links: { demo: "#", github: "#" },
  },
  // UI/UX Projects
  {
    id: "u1",
    title: "Lumino UI Design System",
    description: "Comprehensive design system for modern web and mobile applications with focus on accessibility.",
    type: "ui",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
    tags: ["Figma", "Design System", "Atomic Design"],
    links: { demo: "#" },
  },
  {
    id: "u2",
    title: "Aura Meditation App",
    description: "A calming mobile app design focused on user serenity and minimal interactions.",
    type: "ui",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
    tags: ["Mobile UI", "Figma", "UX Research"],
    links: { demo: "#" },
  },
  {
    id: "u3",
    title: "Quantum Banking Mobile",
    description: "Modern financial app interface designed for ultra-fast transactions and complex data clarity.",
    type: "ui",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    tags: ["Fintech UI", "App Design", "Motion UI"],
    links: { demo: "#" },
  },
  {
    id: "u4",
    title: "Elysium Travel Experience",
    description: "Luxury travel booking experience focusing on immersive visual storytelling and seamless booking.",
    type: "ui",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    tags: ["Booking UI", "Immersive Web", "Visual Design"],
    links: { demo: "#" },
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
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Featured Works</h2>
        <p className="max-w-xl text-zinc-400">
          A curated selection of my professional projects across web development and UI/UX design.
        </p>
      </div>

      {/* Capsule Switcher */}
      <div className="relative flex rounded-full bg-zinc-900 p-1 border border-zinc-800 shadow-2xl">
        <motion.div
          layoutId="active-pill"
          className="absolute inset-y-1 rounded-full bg-blue-600"
          animate={{
            x: category === "web" ? 0 : 160,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          style={{ width: "160px" }}
        />
        <button
          onClick={() => handleCategoryChange("web")}
          className={`relative z-10 flex h-10 w-40 items-center justify-center gap-2 rounded-full font-medium transition-colors ${
            category === "web" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Globe className="h-4 w-4" />
          Web Projects
        </button>
        <button
          onClick={() => handleCategoryChange("ui")}
          className={`relative z-10 flex h-10 w-40 items-center justify-center gap-2 rounded-full font-medium transition-colors ${
            category === "ui" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Palette className="h-4 w-4" />
          UI/UX Designs
        </button>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
      >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/40 backdrop-blur-md transition-all hover:border-blue-500/20 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]"
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
                
                <div className="flex flex-1 flex-col px-8 pb-8 pt-2">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-zinc-400/80">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {project.links.demo && (
                        <a href={project.links.demo} className="group/link flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
                          <span className="relative">
                            Live Preview
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover/link:w-full" />
                          </span>
                          <ExternalLink className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github} className="group/link flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
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
