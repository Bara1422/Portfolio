import React from 'react'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'
import ReactIcon from '../icons/ReactIcon'
import Tailwind from '../icons/Tailwind'
import LinkedIn from '../icons/LinkedIn'
import GitHub from '../icons/GitHub'
import BlobImage from '../icons/BlobImage'

const Hero = ({ isDarkMode }) => {
  return (
    <main
      className='px-6 pb-6 flex flex-col md:flex-row md:h-[800px]  justify-center items-center'
      id='home'
    >
      <div className='md:p-4 flex order-2 md:order-1 flex-col gap-6 lg:w-2/5'>
        <h1 className='text-5xl lg:text-6xl font-bold text-eden-300 dark:outline-none outline-text'>
          Front-End React Developer.
        </h1>
        <p className='text-xl font-semibold'>
          Hi, I'm Juan Martín Baranovsky! An enthusiastic Front-End React
          Developer residing in Bahía Blanca, Argentina.
        </p>
        <div className='flex gap-4 justify-center md:justify-normal '>
          <a
            href='https://github.com/Bara1422'
            target='_blank'
            rel='noreferrer'
          >
            <GitHub scale='hover:scale-110' />
          </a>
          <a
            href='https://www.linkedin.com/in/juan-baranovsky/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedIn />
          </a>
        </div>

        <div className=' md:gap-3 gap-1 flex items-center justify-center md:justify-normal md:flex-row flex-col md:divide-x-2 md:divide-y-0 divide-y-2 divide-gray-500 dark:divide-white'>
          <div>
            <span className='text-xl font-semibold'>Tech Skills</span>
          </div>
          <div className='md:pl-3 md:pt-0 pt-1 flex gap-3 items-center'>
            <span aria-label='HTML5'>
              <HtmlIcon />
            </span>
            <span aria-label='CSS3'>
              <CssIcon />
            </span>
            <span aria-label='JavaScript'>
              <JsIcon />
            </span>
            <span aria-label='React'>
              <ReactIcon isDarkMode={isDarkMode} />
            </span>
            <span aria-label='Tailwind'>
              <Tailwind />
            </span>
          </div>
        </div>
        <div />
      </div>
      <div className='order-1 md:order-2' id='home-anchor'>
        <BlobImage alt='Blob Image' />
      </div>
    </main>
  )
}

export default Hero
