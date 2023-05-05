import React, { memo } from 'react'
import GitHub from '../icons/GitHub'
import LinkedIn from '../icons/LinkedIn'

const Footer = () => {
  return (
    <footer className='flex h-16 mt-16 md:gap-0 gap-2 flex-col md:flex-row justify-evenly items-center'>
      <h6 className='font-bold order-2 md:order-1'>
        Juan Martín Baranovsky Dev
      </h6>
      <div className='flex gap-3 order-1 md:order-2'>
        <a
          href='https://github.com/Bara1422'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='GitHub Profile of Juan Martín Baranovsky'
        >
          <GitHub scale='hover:scale-110' />
        </a>
        <a
          href='https://www.linkedin.com/in/juan-baranovsky/'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='LinkedIn Profile of Juan Martín Baranovsky'
        >
          <LinkedIn />
        </a>
      </div>
    </footer>
  )
}

export default memo(Footer)
