import React from 'react'
import GitHub from '../icons/GitHub'
import ExternalLink from '../icons/ExternalLink'

const Projects = () => {
  return (
    <section className='flex flex-col gap-4 mt-24 p-0'>
      <h2 className='text-eden-400 text-4xl font-bold text-center'>
        PORTFOLIO
      </h2>
      <div className=' bg-white border border-gray-200 rounded-lg md:w-4/5 mx-auto flex md:max-w-4xl max-w-[500px] md:flex-row flex-col  md:gap-7 gap-3 dark:bg-gray-800 dark:border-gray-700 '>
        <img
          src='/About.jpeg'
          alt='Coding Photo'
          className=' rounded-3xl p-2 md:w-[40%] md:object-cover '
        />
        <div className='flex flex-col gap-6 max-w-80 p-3 items-center mx-auto'>
          <h3 className='text-center text-2xl font-bold'>Project Name</h3>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            dolor, minima sed vel recusandae ipsum cumque voluptates. Dolorem
            ullam excepturi totam recusandae. Repudiandae totam labore ducimus.
            Reiciendis, possimus repellendus harum animi ullam perferendis
            blanditiis eaque numquam consectetur delectus, aut corporis!
          </p>
          <div className='flex gap-3 text-xl font-semibold'>
            <span className='p-1 px-2 bg-gray-700 rounded-md shadow-md hover:text-eden-500 cursor-default'>
              React
            </span>
            <span className='p-1 px-2 bg-gray-700 rounded-md shadow-md hover:text-eden-500 cursor-default'>
              Tailwind
            </span>
          </div>
          <div className='flex md:gap-7 gap-3 w-full justify-evenly '>
            <a
              href=''
              className='flex text-xl items-end gap-2 hover:text-eden-500'
            >
              <span>Code</span> <GitHub />
            </a>
            <a
              href=''
              className='flex text-xl items-end gap-2 hover:text-eden-500'
            >
              <span>Demo</span> <ExternalLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

/*
 <div className=' bg-white border border-gray-200 rounded-lg md:w-4/5 p-4 flex md:max-w-4xl max-w-[500px] md:flex-row flex-col mx-auto md:gap-7 gap-3 dark:bg-gray-800 dark:border-gray-700 '>
      <img
        src='/About.jpeg'
        alt='Coding Photo'
        className=' rounded-md  md:w-1/2 md:object-cover '
      /> */
