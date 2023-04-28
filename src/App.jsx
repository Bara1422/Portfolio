import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import useDarkMode from './hooks/useDarkMode'

function App() {
  const [isDarkMode, handleDarkMode] = useDarkMode()

  return (
    <div className=' dark:bg-[rgb(17,24,40)] dark:text-slate-300 flex-col justify-center min-h-screen min-w-full bg-slate-200 font-overpass'>
      <div className='container mx-auto'>
        <header className='flex  flex-col sticky top-0 right-0 left-0'>
          <Navbar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
        </header>
        <Hero isDarkMode={isDarkMode} />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
