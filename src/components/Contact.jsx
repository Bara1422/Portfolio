import React from 'react'
import MailOpen from '../icons/MailOpen'
import MapPin from '../icons/MapPin'

const Contact = () => {
  return (
    <div className='mt-20 flex-col' id='contact'>
      <h3
        className='text-4xl text-center text-eden-400 font-bold'
        id='contact-anchor'
      >
        Contact
      </h3>
      <div className='flex flex-col md:flex-row md:justify-evenly lg:justify-center lg:gap-10 gap-4  pt-4'>
        <div className='flex flex-col text-center border p-4 gap-2 rounded-3xl w-72 md:mx-0 mx-auto shadow-md shadow-eden-400'>
          <h5 className='font-bold text-xl'>Location</h5>
          <a
            href='https://www.google.com/maps/place/Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.7212295,-62.2563724,12z/data=!3m1!4b1!4m6!3m5!1s0x95edbcabdc1302bd:0x76d1d88d241e7a11!8m2!3d-38.7183177!4d-62.2663478!16zL20vMDM2eWhm'
            className='flex gap-2 justify-center hover:text-eden-400 font-semibold'
            target='_blank'
            rel='noreferrer'
          >
            <MapPin /> Bahía Blanca, Argentina
          </a>
        </div>
        <div className='flex flex-col text-center mx-auto border p-4 gap-2 rounded-3xl md:mx-0 w-72 shadow-md shadow-eden-400'>
          <h5 className='font-bold text-xl'>Email</h5>
          <p className='flex gap-2 justify-center font-semibold'>
            <MailOpen /> juanbaranovsky@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
