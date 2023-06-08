import React from 'react'
import { PROJECTS } from '../data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='flex flex-col  mt-24 md:p-5 2xl:max-w-screen-xl mx-auto'>
      <h2
        className='text-eden-800 dark:text-eden-400 text-5xl font-bold text-center'
        id='projects-anchor'
      >
        PORTFOLIO
      </h2>
      <div className='h-auto p-3 flex gap-10 flex-col'>
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
