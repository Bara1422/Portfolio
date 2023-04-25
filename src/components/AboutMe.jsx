import React from 'react'

const AboutMe = () => {
  return (
    <div
      id='about'
      className=' bg-white border border-gray-200 rounded-lg md:w-4/5 p-4 flex md:max-w-4xl max-w-[500px] md:flex-row flex-col mx-auto md:gap-7 gap-3 dark:bg-gray-800 dark:border-gray-700 '
    >
      <img
        src='/About.jpeg'
        alt='Coding Photo'
        className=' rounded-md  md:w-1/2 md:object-cover '
      />
      <div className='md:w-1/2 flex gap-3 flex-col'>
        <h3 className='text-2xl text-eden-400 font-bold '>About Me</h3>
        <p className='md:text-xl text-xl md:w-4/5 '>
          An enthusiastic Front-End Developer with React as main tech
          complemented with HTML, CSS, JavaScript, Tailwind, Styled-Components
          among others. Always trying to learn cutting-edge technologies and
          looking forward to working with a team to accomplish new goals.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
