import React from 'react'
import GitHub from '../icons/GitHub'
import ExternalLink from '../icons/ExternalLink'

const Projects = () => {
  return (
    <section className='flex flex-col gap-4 mt-24 p-0' id='projects'>
      <h2 className='text-eden-400 text-4xl font-bold text-center'>
        PORTFOLIO
      </h2>
      <div className='h-auto '>
        <div className=' bg-white border  border-gray-200 rounded-lg p-3  h-[27rem] mx-auto flex  md:flex-row flex-col  md:gap-7 gap-3 dark:bg-gray-800 dark:border-gray-700 '>
          <div className='h-96 w-3/5 overflow-hidden border-slate-700 rounded-md border my-auto'>
            <a href='#home'>
              <img
                src='/freectionaryImg.png'
                alt=''
                className=' transition-all ease-in-out duration-[6000ms] w-full object-top hover:object-bottom object-cover max-h-full'
              />
            </a>
          </div>
          <div className='flex flex-col gap-6 max-w-[400px] p-3 items-center mx-auto h-full relative'>
            <h3 className='text-center text-3xl  font-bold'>Freectionary</h3>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              dolor, minima sed vel recusandae ipsum cumque voluptates. Dolorem
              ullam excepturi totam recusandae.
            </p>
            <div className='flex gap-3 text-xl font-semibold absolute bottom-16'>
              <span className='p-1 px-2 bg-gray-700 rounded-md shadow-md hover:text-eden-500 cursor-default'>
                React
              </span>
              <span className='p-1 px-2 bg-gray-700 rounded-md shadow-md hover:text-eden-500 cursor-default'>
                Tailwind
              </span>
            </div>
            <div className='flex md:gap-7 gap-3 w-full justify-evenly  absolute bottom-3 '>
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
