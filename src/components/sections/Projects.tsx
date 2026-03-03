"use client"

import { useEffect, useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
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
  {
    id: "1",
    title: "EcoSphere Web Application",
    description: "Full-stack e-commerce platform with real-time analytics and dynamic inventory management.",
    type: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "2",
    title: "Lumino UI Design System",
    description: "Comprehensive design system for modern web and mobile applications with focus on accessibility.",
    type: "ui",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
    tags: ["Figma", "Design System", "Atomic Design"],
    links: { demo: "#" },
  },
  {
    id: "3",
    title: "Velocity Dashboard",
    description: "Performance monitoring dashboard for high-traffic servers with visual data visualization.",
    type: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "D3.js", "Framer Motion"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "4",
    title: "Aura Meditation App",
    description: "A calming mobile app design focused on user serenity and minimal interactions.",
    type: "ui",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
    tags: ["Mobile UI", "Figma", "UX Research"],
    links: { demo: "#" },
  },
]

function ProjectsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialCategory = (searchParams.get("c") as ProjectType) || "web"
  const [category, setCategory] = useState<ProjectType>(initialCategory)

  useEffect(() => {
    const c = searchParams.get("c")
    if (c === "web" || c === "ui") {
      setCategory(c as ProjectType)
    }
  }, [searchParams])

  const handleCategoryChange = (newCategory: ProjectType) => {
    setCategory(newCategory)
    router.push(`/projects?c=${newCategory}`, { scroll: false })
  }

  const filteredProjects = projects.filter((p) => p.type === category)

  return (
    <section id="projects" className="w-full px-6 py-24 lg:px-24">
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
              x: category === "web" ? 0 : 158, // Precise movement based on width
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: "158px" }}
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
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-zinc-700"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-blue-400 font-bold bg-blue-400/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center gap-4">
                    {project.links.demo && (
                      <a href={project.links.demo} className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                        Live Demo <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                        GitHub <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-zinc-500">Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  )
}
