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

const Hero = ({ isDarkMode }) => {
  return (
    <main
      className='px-6 pb-6 flex flex-col-reverse md:flex-row md:h-screen md:justify-center justify-around items-center min-h-screen'
      id='home'
    >
      <div className=' flex  flex-col gap-6 lg:w-2/5'>
        <h1 className='text-5xl lg:text-6xl font-bold dark:text-eden-300 text-eden-800 dark:outline-none '>
          Front-End React Developer.
        </h1>
        <p className='text-xl font-semibold dark:text-slate-200 text-slate-900'>
          Hi, I'm Juan Martín Baranovsky! An enthusiastic Front-End React
          Developer residing in Bahía Blanca, Argentina.
        </p>
        <div className='flex gap-4 justify-center md:justify-normal mt-2'>
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

        <div className=' md:gap-3 gap-1 flex items-center justify-center md:justify-normal md:flex-row flex-col md:divide-x-2 md:divide-y-0 divide-y-2 divide-gray-500 dark:divide-white mt-2'>
          <h2 className='lg:text-2xl text-xl font-bold'>Tech Skills</h2>

          <div className='md:pl-3 md:pt-0 pt-1 flex gap-3 items-center'>
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
        <div />
      </div>
      <div className=' md:mt-[-100px]' id='home-anchor'>
        <BlobImage alt='Image of me' />
      </div>
    </main>
  )
}

export default Hero
