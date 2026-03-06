import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#020204] text-zinc-50 selection:bg-blue-500/30 selection:text-blue-200">
      <BackgroundDecor />

      <Navbar />

      <main className="relative z-10 mx-auto max-w-7xl">
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 w-full border-t border-zinc-800 bg-black/50 py-12 backdrop-blur-sm">
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
