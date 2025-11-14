import React from 'react'

export default function ProjectCard({title, description}:{title:string, description:string}){
  return (
    <article className="border rounded p-4 shadow-sm bg-white">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </article>
  )
}
