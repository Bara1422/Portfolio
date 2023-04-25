import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className=' bg-[rgb(17,24,40)] text-slate-300 flex-col justify-center min-h-screen min-w-full'>
      <div className='container mx-auto'>
        <header className='flex  flex-col sticky top-0 right-0 left-0'>
          <Navbar />
        </header>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
