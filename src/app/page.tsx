import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#030303] text-zinc-50 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <Navbar />
      
      <main className="mx-auto max-w-7xl">
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="w-full border-t border-zinc-800 bg-black/50 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-24">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} UI/UX & Web Dev Portfolio. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
