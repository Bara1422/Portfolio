/* eslint-disable multiline-ternary */
import { Menu } from 'lucide-react'
import React, { useState } from 'react'

const MobileNavbar = ({ menuLinks }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className='flex items-center sm:hidden'>
      <Menu onClick={handleToggle} className='relative z-50 h-5 w-5' />

      {isOpen ? (
        <div className='fixed inset-0 z-0 w-full animate-in fade-in-20 slide-in-from-top-5'>
          <ul className='absolute grid w-full gap-3 bg-zinc-100 px-10 pb-8 pt-20 shadow-md  dark:bg-[rgb(17,24,40)]'>
            {menuLinks.map((link) => (
              <li
                key={link.name}
                className='border-b border-zinc-500 pb-2 text-center text-xl'
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
    </div>
  )
}

export default MobileNavbar
