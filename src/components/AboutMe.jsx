import React from 'react'

const AboutMe = () => {
  return (
    <div className='p-2'>
      <div className='mx-auto flex max-w-[362px] flex-col gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:shadow-sm dark:shadow-eden-400 sm:mx-auto md:w-4/5 md:max-w-4xl md:flex-row md:gap-7 '>
        <img
          id='about'
          src='/About.webp'
          alt='Developer working photo'
          className=' rounded-md  shadow-md md:w-1/2 md:object-cover'
          loading='lazy'
          decoding='async'
        />
        <div className='flex flex-col gap-3 md:w-1/2'>
          <h2 className='text-3xl font-bold text-[#2a3b47] dark:text-eden-400 '>
            About Me
          </h2>
          <p className='text-md md:w-5/5 md:text-xl '>
            I'm a Front-End Developer with React as main tech complemented with
            HTML, CSS, JavaScript, Tailwind, Styled-Components among others.
            Always trying to learn cutting-edge technologies and looking forward
            to working with a team to accomplish new goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
