import React from 'react'
import { PROJECTS } from '../data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section
      className='mx-auto flex flex-col md:p-5 2xl:max-w-screen-xl'
      id='projects'
    >
      <h2 className=' mt-28 text-center text-5xl font-bold text-[rgb(0,88,118)]  dark:text-eden-400 md:mt-20'>
        PORTFOLIO
      </h2>
      <div className='flex h-auto flex-col gap-10 overflow-hidden p-3'>
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
