import React, { memo } from 'react'
import GitHub from '../icons/GitHub'
import LinkedIn from '../icons/LinkedIn'

const Footer = () => {
  return (
    <footer className='mt-16 flex h-16 flex-col items-center justify-evenly gap-2 border-t border-slate-400 md:flex-row md:gap-0'>
      <h3 className='order-2 font-bold md:order-1'>
        Juan Martín Baranovsky Dev
      </h3>
      <div className='order-1 flex gap-3 md:order-2'>
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
