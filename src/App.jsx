import './App.css'
import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Navbar from './sections/Navbar'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

function App() {
  
  return (
    <div className="w-full min-h-screen">
        <Navbar />
    <div className="max-w-[1440px] mx-auto">
        <div className='mb-10 sm:mb-0'>
          <Hero />
        </div>
        <About/>
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
