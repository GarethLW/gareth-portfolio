import React from 'react'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">Gareth</a>
        <nav className="space-x-4">
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
          <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
