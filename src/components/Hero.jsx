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
      className='px-6 pb-6 flex flex-col md:flex-row md:h-screen md:justify-center justify-around items-center'
      id='home'
    >
      <div className='md:p-4 flex order-2 md:order-1 flex-col gap-6 lg:w-2/5'>
        <h1 className='text-5xl lg:text-6xl font-bold dark:text-eden-300 text-[#2a3b47] dark:outline-none '>
          Front-End React Developer.
        </h1>
        <p className='text-xl font-semibold'>
          Hi, I'm Juan Martín Baranovsky! An enthusiastic Front-End React
          Developer residing in Bahía Blanca, Argentina.
        </p>
        <div className='flex gap-4 justify-center md:justify-normal '>
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

        <div className=' md:gap-3 gap-1 flex items-center justify-center md:justify-normal md:flex-row flex-col md:divide-x-2 md:divide-y-0 divide-y-2 divide-gray-500 dark:divide-white'>
          <div>
            <h2 className='text-xl font-semibold'>Tech Skills</h2>
          </div>
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
      <div className='order-1 md:order-2' id='home-anchor'>
        <BlobImage alt='Image of me' />
      </div>
    </main>
  )
}

export default Hero
