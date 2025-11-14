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
      <motion.p variants={item} className="mt-4 text-gray-600">I'm a software developer focused on building accessible, performant web apps. This portfolio is built with React + Vite + Tailwind.</motion.p>
    </motion.div>
  )
}
