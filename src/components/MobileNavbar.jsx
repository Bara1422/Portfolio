/* eslint-disable multiline-ternary */
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const MobileNavbar = ({ menuLinks }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  /* TODO FIX MAX WIDTH */
  return (
    <div className='flex items-center gap-4 sm:hidden'>
      <Menu onClick={handleToggle} className='relative z-50 h-5 w-5' />

      {isOpen ? (
        <div className='fixed inset-0 z-0 w-full animate-in fade-in-20 slide-in-from-top-5'>
          <ul className='absolute grid w-full gap-3 bg-zinc-100 px-10 pb-8 pt-20 shadow-lg  dark:bg-[rgb(17,24,40)]'>
            {menuLinks.map((link) => (
              <li
                key={link.name}
                className='border-b border-zinc-300 pb-2 text-center text-xl dark:border-zinc-600'
              >
                <a
                  href={link.target === 'home' ? '#' : `#${link.target}`}
                  onClick={handleToggle}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <ThemeToggle />
    </div>
  )
}

export default MobileNavbar
