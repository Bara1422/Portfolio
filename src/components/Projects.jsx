import React from 'react'
import { PROJECTS } from '../data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='flex flex-col gap-4 mt-24 p-0'>
      <h2
        className='text-eden-400 text-4xl font-bold text-center outline-text'
        id='projects-anchor'
      >
        PORTFOLIO
      </h2>
      <div className='h-auto p-2 flex gap-10 flex-col'>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            order={index % 2 === 0 ? 1 : 2}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
