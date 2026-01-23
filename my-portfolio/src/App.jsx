import React from 'react'
import './index.css'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Skills from './Components/Skills/Skills'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Skills/>
    </div>
  )
}

export default App