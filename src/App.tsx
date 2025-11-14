import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Reveal from './components/Reveal'
import ParallaxShape from './components/ParallaxShape'

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="w-full snap-y snap-mandatory scroll-smooth">
        <section id="home" className="min-h-screen snap-center flex items-center bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">


          <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
            <Reveal>
              <Hero />
            </Reveal>
          </div>

          <ParallaxShape speed={0.5} className="-left-12 -top-8 -z-11">
            <svg width="760" height="760" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="180" cy="180" r="180" fill="#E2E8F0" />
            </svg>
          </ParallaxShape>
        </section>
        <section id="about" className="min-h-screen snap-center flex items-center bg-slate-900 text-white relative overflow-hidden">
          <ParallaxShape speed={-0.35} className="right-2 top-52 -z-11">
            <svg width="520" height="1520" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
              <rect width="620" height="220" rx="36" fill="#182a41ff" />
            </svg>
          </ParallaxShape>
          <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
            <Reveal delay={0.05}>
              <About />
            </Reveal>
          </div>
        </section>
        <section id="projects" className="min-h-screen snap-center flex items-center bg-white relative overflow-hidden">
          <ParallaxShape speed={-0.84} className="-left-12 top-6 -z-11">
            <svg width="1360" height="1360" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="0,20 1540,1540 20,1540"
                fill="#0f172a"
                opacity="0.32"
              />
            </svg>
          </ParallaxShape>
          <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
            <Reveal delay={0.1}>
              <Projects />
            </Reveal>
          </div>
        </section>
        <section id="contact" className="min-h-screen snap-center flex items-center bg-slate-900 text-white relative overflow-hidden">

          <div className="w-full max-w-4xl mx-auto px-4">
            <Reveal delay={0.15}>
              <Contact />
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  )
}
