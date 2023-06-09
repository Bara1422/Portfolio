import React from 'react'
import MailOpen from '../icons/MailOpen'
import MapPin from '../icons/MapPin'

const Contact = () => {
  return (
    <div className='mt-20 flex-col' id='contact'>
      <h2
        className='text-center text-4xl font-bold text-eden-800 dark:text-eden-400 '
        id='contact-anchor'
      >
        CONTACT
      </h2>
      <div className='flex flex-col gap-4 pt-4 md:flex-row md:justify-evenly lg:justify-center  lg:gap-10'>
        <div className=' mx-auto flex w-72 flex-col gap-2 rounded-3xl border border-gray-300 bg-white p-4 text-center shadow-sm shadow-eden-400 dark:bg-[rgb(21,30,51)]  md:mx-0'>
          <h3 className='text-xl font-bold'>Location</h3>
          <a
            href='https://www.google.com/maps/place/Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.7212295,-62.2563724,12z/data=!3m1!4b1!4m6!3m5!1s0x95edbcabdc1302bd:0x76d1d88d241e7a11!8m2!3d-38.7183177!4d-62.2663478!16zL20vMDM2eWhm'
            className='flex justify-center gap-2 font-semibold hover:text-eden-600 dark:hover:text-eden-500'
            target='_blank'
            rel='noreferrer'
            aria-label='Map of Bahía Blanca, Argentina'
          >
            <MapPin /> Bahía Blanca, Argentina
          </a>
        </div>
        <div className='mx-auto flex w-72 flex-col gap-2 rounded-3xl border border-gray-300  bg-white p-4 text-center shadow-sm shadow-eden-500 dark:bg-[rgb(21,30,51)] dark:shadow-eden-400 md:mx-0  '>
          <h3 className='text-xl font-bold'>Email</h3>
          <a
            href='mailto:juanbaranovsky@gmail.com'
            className='flex justify-center gap-2 font-semibold  hover:text-eden-600 dark:hover:text-eden-500'
            aria-label='Send e-mail to juanbaranovsky@gmail.com'
          >
            <MailOpen /> juanbaranovsky@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
