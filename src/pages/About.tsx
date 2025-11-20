import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About(){
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={item} className="text-2xl font-bold">About</motion.h2>
      <motion.p variants={item} className="mt-4 text-gray-600">I'm a developer with experience across the stack, from C# web services and SQL work to Azure deployments and front-end projects. I care about clear, reliable solutions and I enjoy exploring new ideas through personal projects in React, Android, and computer vision.</motion.p>
    </motion.div>
  )
}
