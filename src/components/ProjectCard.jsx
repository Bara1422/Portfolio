import React, { useRef } from 'react'
import ExternalLink from '../icons/ExternalLink'
import Github2 from '../icons/Github2'
import { useInView, motion } from 'framer-motion'

const ProjectCard = ({ project, order }) => {
  const projectRef = useRef(null)
  const inView = useInView(projectRef, { once: true })
  return (
    <motion.div
      ref={projectRef}
      variants={{
        hidden: { opacity: 0, x: order === 1 ? -100 : 100 },
        visible: { opacity: 1, x: 0 }
      }}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      key={project.name}
      id='projects'
      className={` mx-auto  flex h-auto  w-full flex-col  gap-3 rounded-lg border border-gray-300  bg-slate-50 p-3 dark:border-gray-700 dark:bg-gray-800 lg:h-[27rem] lg:flex-row lg:gap-7 ${
        order === 1 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } shadow-sm shadow-eden-300`}
    >
      <div className='h-[250px] overflow-hidden rounded-md border border-gray-300 shadow-md dark:border-slate-700 sm:h-[340px] lg:my-auto lg:h-96 lg:w-3/5  '>
        <a
          href={project.demoPage}
          className='h-full'
          target='_blank'
          rel='noreferrer'
        >
          <img
            loading='lazy'
            src={project.image}
            alt={`Image of ${project.name} project`}
            width={800}
            height={400}
            className=' h-full max-h-full w-full object-cover object-top transition-all duration-[6000ms] ease-in-out sm:object-cover lg:hover:object-bottom '
          />
        </a>
      </div>
      <div className='mx-auto my-auto flex max-w-[400px] flex-col gap-6 p-3 '>
        <h3 className='text-center text-3xl font-bold dark:text-slate-200'>
          {project.name}
        </h3>
        <p className='max-h-32 overflow-auto text-lg lg:min-h-[200px]'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-3 text-xl font-semibold'>
          {project.techs.map((tech) => (
            <span
              key={tech}
              className='rounded-md bg-gray-100 p-1 px-2 shadow-md dark:bg-gray-700 '
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex w-full justify-center gap-3 md:gap-7 '>
          <a
            target='_blank'
            href={project.githubCode}
            className='flex items-end gap-2 text-xl hover:text-eden-600 dark:hover:text-eden-500 '
            rel='noreferrer'
            aria-label={`GitHub code of ${project.name} project`}
          >
            <span>Code</span> <Github2 />
          </a>
          <a
            target='_blank'
            href={project.demoPage}
            className='flex items-end gap-2 text-xl hover:text-eden-600 dark:hover:text-eden-500'
            rel='noreferrer'
            aria-label={`Live page of ${project.name} project`}
          >
            <span>Demo</span> <ExternalLink />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
