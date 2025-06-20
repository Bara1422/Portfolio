import LinkedIn from '../icons/LinkedIn'
import GitHub from '../icons/GitHub'
import BlobImage from '../icons/BlobImage'
import { Tooltip } from '@mui/material'
import resume from '../assets/CV_Baranovsky_Juan_Martin.pdf'
import TechIcons from './TechIcons'
import { motion } from 'framer-motion'

const Hero = () => {
  const text = 'Front-End Developer'
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.04 * i }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <main
      className='flex flex-col-reverse items-center justify-end min-h-screen px-8 pb-6 mx-auto max-w-7xl md:h-screen md:flex-row md:justify-between md:pr-0'
      id='home'
    >
      <div className='flex flex-col gap-6 lg:w-2/5'>
        <div className='flex flex-col overflow-hidden'>
          <h1 className='text-3xl font-bold dark:outline-none sm:text-4xl md:text-5xl lg:text-6xl '>
            Hi, I'm Juan Baranovsky!{' '}
          </h1>
          <motion.div
            variants={container}
            className='flex flex-wrap overflow-hidden'
            initial='hidden'
            animate='visible'
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                key={index}
                className='mr-1 inline-flex text-4xl font-bold text-[rgb(0,88,118)] dark:text-eden-300 lg:text-5xl'
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <p className='text-xl font-semibold line text-slate-900 dark:text-slate-200'>
          I'm always trying to learn cutting-edge technologies and looking
          forward to working with a team to accomplish new goals. Residing in
          Bahía Blanca, Argentina.
        </p>
        <div className='flex items-center justify-center gap-4 mt-2 md:flex-col md:items-center lg:flex-row lg:items-center lg:justify-start lg:gap-8'>
          <div className='flex justify-center gap-4 '>
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
            className='flex justify-center px-4 py-2 text-xl font-bold text-center transition-all duration-300 border-2 rounded-lg shadow-md border-zinc-400 hover:border-zinc-600 dark:border-slate-800 dark:hover:border-eden-500 sm:text-end sm:text-2xl md:justify-start '
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className='flex flex-col items-center justify-center gap-1 mt-2 divide-y-2 divide-gray-500 dark:divide-white lg:flex-row lg:justify-normal lg:gap-3 lg:divide-x-2 lg:divide-y-0'>
          <h2 className='text-xl font-bold lg:text-2xl'>Tech Skills</h2>
          <TechIcons />
        </div>
      </div>
      <div className=' md:mt-[-100px]' id='home-anchor'>
        <BlobImage alt='Image of me' />
      </div>
    </main>
  )
}

export default Hero
