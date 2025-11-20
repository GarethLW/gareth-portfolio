import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects(){
  const sample = [
    {title: 'Portfolio', description: 'This site. Responsive portfolio built with React and Tailwind. Hosted on Vercel', github: 'https://github.com/GarethLW/gareth-portfolio', link: 'https://gareth-portfolio.vercel.app/'},
    {title: 'Note Taking App', description: 'Deployed on Kubernetes. React, Node.js, MongoDB database. Docker. Horizontal Pod Autoscalers (HPA)', github: 'https://github.com/GarethLW/azurekubeapp', link: 'https://youtu.be/2N6ibsHrzoA'}
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold">Projects</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2"
      >
        {sample.map(p => (
          <motion.div key={p.title} variants={item}>
            <ProjectCard title={p.title} description={p.description} github={p.github} link={p.link} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
