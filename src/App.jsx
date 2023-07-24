import './App.css'
/* import AboutMe from './components/AboutMe' */
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import useDarkMode from './hooks/useDarkMode'

function App() {
  const [isDarkMode, handleDarkMode] = useDarkMode()

  return (
    <div className=' min-h-screen min-w-full flex-col justify-center bg-zinc-100 font-overpass dark:bg-[rgb(17,24,40)] dark:text-slate-300 2xl:max-w-xl'>
      <div className='container mx-auto'>
        <header className='sticky left-0 right-0 top-0 flex flex-col'>
          <Navbar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
        </header>
        <Hero isDarkMode={isDarkMode} />
        {/* <AboutMe /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
