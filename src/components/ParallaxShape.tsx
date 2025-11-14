import React from 'react'

type ParallaxShapeProps = {
  children: React.ReactNode
  speed?: number // multiplier for parallax movement (positive moves with scroll, negative opposite)
  className?: string
  style?: React.CSSProperties
}

export default function ParallaxShape({ children, speed = 0.2, className = '', style }: ParallaxShapeProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (!ref.current) return

    let raf = 0
    let lastScroll = window.scrollY
    let ticking = false

    // disable parallax on small screens
    const isSmall = () => (typeof window !== 'undefined' ? window.innerWidth < 768 : false)
    if (isSmall()) {
      if (ref.current) ref.current.style.transform = 'none'
      return
    }

    function update() {
      if (!ref.current) return
      const el = ref.current
      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight || 1
      // progress relative to center: -1 (far above) .. 1 (far below)
      const progress = (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight
      // scale movement by viewport height to make motion more visible
      const translateY = Math.round(progress * windowHeight * speed)
      el.style.transform = `translateY(${translateY}px)`
      ticking = false
    }

    function onScroll() {
      lastScroll = window.scrollY
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(update)
      }
    }

    // initial update
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [speed])

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{ willChange: 'transform', ...style }}
    >
      {children}
    </div>
  )
}
