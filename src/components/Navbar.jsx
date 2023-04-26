import React, { useEffect, useState } from 'react'
import BurgerMenu from '../icons/BurgerMenu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(false)
    }
  }, [window.innerWidth])

  function scrollToComponent(id) {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <nav className='bg-white border-gray-200 dark:bg-[rgb(17,24,40)] sticky top-0 left-0 right-0 '>
      <div className=' max-w-screen-xl flex flex-wrap items-end justify-between mx-auto px-6 pt-6 pb-3  '>
        <span className='self-center pl-4 text-2xl font-semibold whitespace-nowrap dark:text-white z-[60] '>
          BaraDev
        </span>

        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-end p-2 mr-4 ml-3 text-sm z-[60] text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          <BurgerMenu />
        </button>

        {isOpen && (
          <div
            className='fixed top-0 left-0 z-50 w-full h-full bg-gray-900 opacity-50'
            onClick={() => setIsOpen(false)}
          />
        )}
        <div
          className=' w-full md:block  md:w-auto md:max-h-fit overflow-hidden md:overflow-visible px-4 z-[60] '
          id='navbar-default'
        >
          <ul
            className={`${
              isOpen
                ? 'max-h-fit  opacity-100'
                : 'max-h-0 -translate-y-[300px] opacity-0 md:opacity-100 md:max-h-fit md:translate-y-0 '
            } font-medium flex flex-col p-4 md:p-0 mt-4  border md:transition-none transition-all duration-300  z-50 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          >
            <li>
              <a
                onClick={() => scrollToComponent('home')}
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToComponent('about')}
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer'
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToComponent('projects')}
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer'
              >
                Porfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToComponent('contact')}
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
