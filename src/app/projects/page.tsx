import { Navbar } from "@/components/sections/Navbar"
import { Projects } from "@/components/sections/Projects"

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#030303] text-zinc-50">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <Navbar />
      
      <main className="mx-auto max-w-7xl pt-24">
        <Projects />
      </main>
      
      <footer className="w-full border-t border-zinc-800 bg-black/50 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-24">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} UI/UX & Web Dev Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
