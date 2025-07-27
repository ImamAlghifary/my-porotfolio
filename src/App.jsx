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
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
