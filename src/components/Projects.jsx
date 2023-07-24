import React from 'react'
import { PROJECTS } from '../data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='mx-auto mt-24 flex flex-col md:p-5 2xl:max-w-screen-xl'>
      <h2
        className='text-center text-5xl font-bold text-eden-800 dark:text-eden-400'
        id='projects-anchor'
      >
        PORTFOLIO
      </h2>
      <div className='flex h-auto flex-col gap-10 p-3'>
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
