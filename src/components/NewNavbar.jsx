import React from 'react'

import { ThemeToggle } from './ThemeToggle'
import MobileNavbar from './MobileNavbar'

const menuLinks = [
  { name: 'Home', target: 'home' },
  { name: 'Portfolio', target: 'projects' },
  { name: 'Contact', target: 'contact' }
]

const NewNavbar = () => {
  return (
    <nav className='sticky  left-0 right-0 top-0 z-40 bg-zinc-100 opacity-100 backdrop-blur-lg transition-all dark:bg-[rgb(17,24,40)]'>
      <div className='mx-auto flex max-w-screen-xl justify-between border-b border-slate-400 px-5 pb-3 pt-6'>
        <a
          className='z-40 cursor-pointer self-center whitespace-nowrap text-3xl font-semibold hover:text-eden-500 md:pl-3'
          href='/'
        >
          <span className='font-semibold transition-colors duration-300 dark:text-white dark:hover:text-eden-200'>
            BaraDev
          </span>
        </a>

        <MobileNavbar menuLinks={menuLinks} />

        <div
          className='z-[60] hidden w-full place-content-end px-3 sm:flex '
          id='navbar-default'
        >
          <ul className='space-x-4 sm:flex'>
            {menuLinks.map((link) => (
              <li key={link.name}>
                <a
                  className='animation-under block cursor-pointer rounded p-0 py-2 pl-3 pr-4 text-xl text-gray-900 hover:bg-gray-100 hover:bg-transparent dark:text-white dark:hover:text-white '
                  aria-current='page'
                  href={link.target === 'home' ? '#' : `#${link.target}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <ThemeToggle />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NewNavbar
