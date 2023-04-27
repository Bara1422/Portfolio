import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }

  return (
    <div className=' dark:bg-[rgb(17,24,40)] dark:text-slate-300 flex-col justify-center min-h-screen min-w-full bg-slate-100 font-overpass'>
      <div className='container mx-auto'>
        <header className='flex  flex-col sticky top-0 right-0 left-0'>
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </header>
        <Hero darkMode={darkMode} />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
