import React from 'react'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'
import ReactIcon from '../icons/ReactIcon'
import Tailwind from '../icons/Tailwind'
import LinkedIn from '../icons/LinkedIn'
import GitHub from '../icons/GitHub'
import BlobImage from '../icons/BlobImage'
import { Tooltip } from '@mui/material'

import resume from '../../public/CV_Juan_Martín_Baranovsky.pdf'

const Hero = ({ isDarkMode }) => {
  return (
    <main
      className='flex min-h-screen flex-col-reverse items-center justify-around px-6 pb-6 md:h-screen md:flex-row md:justify-center'
      id='home'
    >
      <div className=' flex flex-col gap-6 lg:w-2/5'>
        <h1 className='text-5xl font-bold text-eden-800 dark:text-eden-300 dark:outline-none lg:text-6xl '>
          Front-End React Developer.
        </h1>
        <p className='text-xl font-semibold text-slate-900 dark:text-slate-200'>
          Hi, I'm Juan Martín Baranovsky! An enthusiastic Front-End React
          Developer residing in Bahía Blanca, Argentina.
        </p>
        <div className='mt-2 flex flex-col items-center justify-center gap-4 md:justify-normal lg:flex-row lg:gap-8'>
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
            <button className='mt-4 flex items-end rounded-lg border-2 border-transparent px-5 py-2 text-2xl font-bold shadow-md transition-all duration-300 hover:border-slate-400 '>
              DOWNLOAD CV
            </button>
          </a>
        </div>

        <div className=' mt-2 flex flex-col items-center justify-center gap-1 divide-y-2 divide-gray-500 dark:divide-white md:flex-row md:justify-normal md:gap-3 md:divide-x-2 md:divide-y-0'>
          <h2 className='text-xl font-bold lg:text-2xl'>Tech Skills</h2>

          <div className='flex items-center gap-3 pt-1 md:pl-3 md:pt-0'>
            <Tooltip title='HTML5'>
              <span role='img' aria-label='HTML5 Icon'>
                <HtmlIcon />
              </span>
            </Tooltip>
            <Tooltip title='CSS3'>
              <span role='img' aria-label='CSS3 Icon'>
                <CssIcon />
              </span>
            </Tooltip>
            <Tooltip title='JavaScript'>
              <span role='img' aria-label='JavaScript Icon'>
                <JsIcon />
              </span>
            </Tooltip>
            <Tooltip title='React'>
              <span role='img' aria-label='React Icon'>
                <ReactIcon isDarkMode={isDarkMode} />
              </span>
            </Tooltip>
            <Tooltip title='Tailwind'>
              <span role='img' aria-label='Tailwind Icon' id='about-anchor'>
                <Tailwind />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className=' md:mt-[-100px]' id='home-anchor'>
        <BlobImage alt='Image of me' />
      </div>
    </main>
  )
}

export default Hero
