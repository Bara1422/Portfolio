import React, { Fragment } from 'react'
import { PROJECTS } from '../data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='flex flex-col gap-4 mt-24 p-0' id='projects'>
      <h2
        className='text-eden-400 text-4xl font-bold text-center'
        id='projects-anchor'
      >
        PORTFOLIO
      </h2>
      <div className='h-auto p-2 flex gap-4 flex-col'>
        {PROJECTS.map((project, index) => (
          <Fragment key={project}>
            <ProjectCard project={project} order={index % 2 === 0 ? 1 : 2} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects
