import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// Generate email dynamically to avoid bot indexing
function generateEmail() {
  const name = atob('Z2FyZXRod2llYmU=') 
  const domain = atob('aG90bWFpbC5jb20=') 
  return `${name}@${domain}`
}

export default function Contact(){
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    setEmail(generateEmail())
  }, [])

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <motion.h2 variants={item} className="text-2xl font-bold">Contact</motion.h2>
      <motion.p variants={item} className="mt-4 text-gray-600">
        You can reach me at <strong>{email || 'loading...'}</strong>
        {email && (
          <a href={`mailto:${email}`} className="ml-2 text-blue-600 hover:underline">
            (send email)
          </a>
        )}
      </motion.p>
    </motion.div>
  )
}
