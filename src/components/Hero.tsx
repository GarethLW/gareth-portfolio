import React from 'react'
import { motion } from 'framer-motion'
import resumeUrl from '../GarethWiebeResume.pdf'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Hero(){
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="pt-12 pb-12 text-center">
      <TypewriterHeading texts={["Hi, I'm Gareth", 'Software Developer']} />
      
      <motion.div variants={item} className="mt-6 flex items-center justify-center gap-3">
          <a href="https://github.com/GarethLW" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-800 text-white px-4 py-2 rounded">GitHub</a>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md text-sm md:text-base">Resume</a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-1">
          <button onClick={() => scrollTo('about')} aria-label="Scroll to about" title="Scroll to about" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white/90 backdrop-blur-sm shadow-md animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </motion.div>
    </motion.div>
  )
}

function TypewriterHeading({ texts, speed = 80, pause = 750, loop = true }: { texts: string[]; speed?: number; pause?: number; loop?: boolean }) {
  // texts: list of phrases to type in sequence. Behavior: type → pause → delete → next.
  // If `loop` is true (default) the sequence repeats indefinitely.
  const [index, setIndex] = React.useState(0)
  const [pos, setPos] = React.useState(0)
  const [phase, setPhase] = React.useState<'typing' | 'pausing' | 'deleting' | 'done'>('typing')

  // reset when texts change
  React.useEffect(() => {
    setIndex(0)
    setPos(0)
    setPhase('typing')
  }, [texts])

  React.useEffect(() => {
    const current = texts[index] || ''

    if (phase === 'typing') {
      if (pos < current.length) {
        const t = setTimeout(() => setPos((p: number) => p + 1), speed)
        return () => clearTimeout(t)
      } else {
        // finished typing this phrase
        if (index === texts.length - 1) {
          if (loop) setPhase('pausing')
          else setPhase('done')
        } else {
          setPhase('pausing')
        }
      }
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), pause)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (pos > 0) {
        const t = setTimeout(() => setPos((p: number) => p - 1), Math.max(30, Math.floor(speed / 1.5)))
        return () => clearTimeout(t)
      } else {
        // advance to next phrase (wrap to 0 if looping)
        setIndex((i) => {
          const next = i + 1
          if (next >= texts.length) return loop ? 0 : i
          return next
        })
        setPhase('typing')
      }
    }
  }, [phase, pos, index, texts, speed, pause])

  const visible = (texts[index] || '').slice(0, pos)

  return (
    <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-extrabold typewriter leading-tight" aria-label={texts.join(' ')}>
      <span aria-hidden="true">{visible}</span>
      <span className="cursor" aria-hidden="true">_</span>
    </motion.h1>
  )
}
