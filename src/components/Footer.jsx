import React from 'react'
import GitHub from '../icons/GitHub'
import LinkedIn from '../icons/LinkedIn'

const Footer = () => {
  return (
    <footer className='flex h-16 mt-16 flex-col md:flex-row justify-evenly items-center'>
      <h6 className='font-bold'>Juan Martín Baranovsky Dev</h6>
      <div className='flex gap-3'>
        <a href='https://github.com/Bara1422' target='_blank' rel='noreferrer'>
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
    </footer>
  )
}

export default Footer
