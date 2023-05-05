import React from 'react'
import ExternalLink from '../icons/ExternalLink'
import Github2 from '../icons/Github2'

const ProjectCard = ({ project, order }) => {
  return (
    <div
      key={project.name}
      id='projects'
      className={`bg-slate-50 border  border-gray-300  rounded-lg p-3  lg:h-[27rem] h-auto mx-auto flex  lg:flex-row flex-col w-full lg:gap-7 gap-3 dark:bg-gray-800 dark:border-gray-700 ${
        order === 1 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } shadow-md shadow-eden-300`}
    >
      <div className='lg:h-96 sm:h-[340px] h-[250px] lg:w-3/5 overflow-hidden dark:border-slate-700 border-gray-300 rounded-md border lg:my-auto shadow-md  '>
        <a href={project.demoPage} className='h-full '>
          <img
            src={project.image}
            alt={`Image of ${project.name} project`}
            className=' transition-all ease-in-out duration-[6000ms] sm:object-cover w-full object-top lg:hover:object-bottom object-cover max-h-full h-full '
          />
        </a>
      </div>
      <div className='flex flex-col gap-6 max-w-[400px] p-3 mx-auto my-auto '>
        <h3 className='text-center text-3xl  font-bold'>{project.name}</h3>
        <p className='text-lg lg:min-h-[200px] max-h-36 overflow-auto'>
          {project.description}
        </p>
        <div className='flex gap-3 text-xl font-semibold flex-wrap'>
          {project.techs.map((tech) => (
            <span
              key={tech}
              className='p-1 px-2 dark:bg-gray-700 rounded-md shadow-md '
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex md:gap-7 gap-3 w-full justify-center '>
          <a
            target='_blank'
            href={project.githubCode}
            className='flex text-xl items-end gap-2 hover:text-eden-500'
            rel='noreferrer'
            aria-label={`GitHub code of ${project.name} project`}
          >
            <span>Code</span> <Github2 />
          </a>
          <a
            target='_blank'
            href={project.demoPage}
            className='flex text-xl items-end gap-2 hover:text-eden-500'
            rel='noreferrer'
            aria-label={`Live page of ${project.name} project`}
          >
            <span>Demo</span> <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
