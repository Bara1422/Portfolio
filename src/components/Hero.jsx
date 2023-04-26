import React from 'react'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'
import ReactIcon from '../icons/ReactIcon'
import Tailwind from '../icons/Tailwind'
import LinkedIn from '../icons/LinkedIn'
import GitHub from '../icons/GitHub'
import BlobImage from '../icons/BlobImage'

const Hero = () => {
  return (
    <main
      className='p-6 flex flex-col md:flex-row md:h-[800px]  justify-center items-center'
      id='home'
    >
      <div className='p-4 flex order-2 md:order-1 flex-col gap-6 lg:w-2/5'>
        <h1 className='text-5xl lg:text-6xl font-bold text-eden-300'>
          Front-End React Developer.
        </h1>
        <p className='text-xl font-semibold'>
          Hi, I'm Juan Martín Baranovsky. A passionate Front-End React Developer
          based in Bahía Blanca, Argentina.
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

        <div className=' gap-3 flex items-center justify-center md:justify-normal md:flex-row flex-col md:divide-x-2 md:divide-y-0 divide-y-2'>
          <div>
            <span className='text-xl '>Tech Skills</span>
          </div>
          <div className='md:pl-3 pt-2 flex gap-3 items-center'>
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
              <ReactIcon />
            </span>
            <span aria-label='Tailwind'>
              <Tailwind />
            </span>
          </div>
        </div>
        <div />
      </div>
      <div className='order-1 md:order-2 '>
        <BlobImage />
      </div>
    </main>
  )
}

export default Hero
