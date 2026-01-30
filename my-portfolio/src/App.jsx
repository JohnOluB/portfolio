import React from 'react'
import './index.css'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
   
    </div>
  )
}

export default App