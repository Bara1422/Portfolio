import './App.css'
/* import AboutMe from './components/AboutMe' */
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'

import NewNavbar from './components/NewNavbar'
import Projects from './components/Projects'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <div className=' font-overpass min-h-screen min-w-full flex-col justify-center scroll-smooth bg-zinc-100 dark:bg-[rgb(17,24,40)] dark:text-slate-300 2xl:max-w-xl'>
        <div className='mx-auto sm:container'>
          <header className='sticky left-0 right-0 top-0 flex flex-col'>
            <NewNavbar />
          </header>
          <Hero />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
