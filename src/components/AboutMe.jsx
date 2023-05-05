import React from 'react'

const AboutMe = () => {
  return (
    <div className='p-2'>
      <div className='shadow-md dark:shadow-eden-400 bg-gray-50 border border-gray-200 rounded-lg md:w-4/5 p-4 mx-auto flex md:max-w-4xl max-w-[362px] md:flex-row flex-col sm:mx-auto md:gap-7 gap-3 dark:bg-gray-800 dark:border-gray-700 '>
        <img
          id='about'
          src='/About.webp'
          alt='Developer working photo'
          className=' rounded-md  md:w-1/2 md:object-cover shadow-md'
          loading='lazy'
          decoding='async'
        />
        <div className='md:w-1/2 flex gap-3 flex-col'>
          <h2 className='text-3xl text-eden-500 dark:eden-400 font-bold outline-text'>
            About Me
          </h2>
          <p className='md:text-xl text-md md:w-5/5 '>
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
