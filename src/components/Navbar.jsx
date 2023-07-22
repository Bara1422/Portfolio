import React, { useEffect, useMemo, useState } from 'react'
import BurgerMenu from '../icons/BurgerMenu'
import { Switch } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

const menuLinks = [
  { name: 'Home', target: 'home' },
  { name: 'About', target: 'about' },
  { name: 'Portfolio', target: 'projects' },
  { name: 'Contact', target: 'contact' }
]

const Navbar = ({ isDarkMode, handleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const DarkModeSwitch = useMemo(
    () =>
      styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: '#21d6e0',
          '&:hover': {
            backgroundColor: alpha('#21d6e0', theme.palette.action.hoverOpacity)
          }
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#21d6e0'
        }
      })),
    []
  )

  if (!isDarkMode) {
    DarkModeSwitch.defaultProps = {
      checked: false
    }
  }

  function scrollToComponent(id) {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setIsOpen(false)
      return
    }
    const anchorId = window.innerWidth > 768 ? id : `${id}-anchor`
    const element = document.getElementById(anchorId)
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setIsOpen(false)
  }

  return (
    <nav className='  sticky left-0 right-0 top-0 border-b border-slate-400 bg-zinc-100 opacity-100 dark:bg-[rgb(17,24,40)]'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-end justify-between px-3 pb-3 pt-6 '>
        <a
          onClick={() => scrollToComponent('home')}
          className='cursor-pointer self-center whitespace-nowrap text-3xl font-semibold hover:text-eden-500 md:pl-3'
        >
          <h2 className='font transition-colors duration-300 dark:text-white dark:hover:text-eden-200'>
            BaraDev
          </h2>
        </a>

        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='z-[60] ml-3 inline-flex items-end rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:mr-4 md:hidden'
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          <BurgerMenu aria-label='Open main menu' />
        </button>

        {isOpen && (
          <div
            className='fixed left-0 top-0 z-50 h-full w-full bg-gray-900 opacity-50'
            onClick={() => setIsOpen(false)}
          />
        )}
        <div
          className={`z-[60] w-full  overflow-hidden px-4 md:block md:max-h-fit md:w-auto md:overflow-visible ${
            isOpen ? 'block' : 'hidden'
          } `}
          id='navbar-default'
        >
          <ul
            className={`${
              isOpen
                ? 'max-h-fit  opacity-100'
                : 'max-h-0 -translate-y-[300px] opacity-0 md:max-h-fit md:translate-y-0 md:opacity-100 '
            } mt-4 flex flex-col rounded-lg border border-gray-50 bg-zinc-100  p-4 font-semibold transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0  md:p-0 md:transition-none md:dark:bg-gray-900`}
          >
            {menuLinks.map((link) => (
              <li key={link.name}>
                <a
                  onClick={() => scrollToComponent(link.target)}
                  className='animation-under block cursor-pointer rounded py-2 pl-3 pr-4 text-xl text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent '
                  aria-current='page'
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li>
              <label htmlFor='dark-mode-switch' className='sr-only'>
                Toggle dark mode
              </label>
              <DarkModeSwitch
                id='dark-mode-switch'
                onChange={handleDarkMode}
                checked={isDarkMode}
                aria-label='Toggle dark mode'
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
