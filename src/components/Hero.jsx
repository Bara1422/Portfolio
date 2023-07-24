import React from 'react'
import LinkedIn from '../icons/LinkedIn'
import GitHub from '../icons/GitHub'
import BlobImage from '../icons/BlobImage'
import { Tooltip } from '@mui/material'
import resume from '../assets/Baranovsky_Juan_Martin_CV.pdf'
import TechIcons from './TechIcons'

const Hero = ({ isDarkMode }) => {
  return (
    <main
      className='mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-end px-8 pb-6 md:h-screen md:flex-row md:justify-between md:pr-0'
      id='home'
    >
      <div className='flex flex-col gap-6 lg:w-2/5'>
        <h1 className='text-5xl font-bold dark:outline-none lg:text-6xl '>
          Hi, I'm Juan Baranovsky!{' '}
          <span className='block text-eden-800 dark:text-eden-300'>
            Front-End Developer.
          </span>
        </h1>
        <p className='text-xl font-semibold text-slate-900 dark:text-slate-200'>
          I'm always trying to learn cutting-edge technologies and looking
          forward to working with a team to accomplish new goals. Residing in
          Bahía Blanca, Argentina.
        </p>
        <div className='mt-2 flex items-center justify-center gap-4 md:flex-col md:items-start lg:flex-row lg:items-center lg:justify-start lg:gap-8'>
          <div className='mt-2 flex justify-center gap-4'>
            <Tooltip title='Github'>
              <a
                href='https://github.com/Bara1422'
                target='_blank'
                rel='noreferrer'
              >
                <GitHub scale='hover:scale-110' />
                <span className='sr-only'>GitHub Profile</span>
              </a>
            </Tooltip>
            <Tooltip title='LinkedIn'>
              <a
                href='https://www.linkedin.com/in/juan-baranovsky/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedIn />
                <span className='sr-only'>LinkedIn Profile</span>
              </a>
            </Tooltip>
          </div>
          <a
            href={resume}
            download='Juan Martín Baranovsky CV Frontend'
            className='flex justify-center active:translate-y-1 md:justify-start'
          >
            <button className='mt-4 flex rounded-lg border-2 border-zinc-400 px-5 py-2 text-2xl font-bold shadow-md transition-all duration-300 hover:border-zinc-600 dark:border-slate-800 dark:hover:border-eden-500 sm:text-end '>
              DOWNLOAD CV
            </button>
          </a>
        </div>

        <div className='mt-2 flex flex-col items-center justify-center gap-1 divide-y-2 divide-gray-500 dark:divide-white lg:flex-row lg:justify-normal lg:gap-3 lg:divide-x-2 lg:divide-y-0'>
          <h2 className='text-xl font-bold lg:text-2xl'>Tech Skills</h2>
          <TechIcons isDarkMode={isDarkMode} />
        </div>
      </div>
      <div className=' md:mt-[-100px]' id='home-anchor'>
        <BlobImage alt='Image of me' />
      </div>
    </main>
  )
}

export default Hero
