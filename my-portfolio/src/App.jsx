import React from 'react'
import './index.css'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Articles from './Components/Articles/Article'
import Contact from './Components/COntact/Contact'



const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Articles/>
      <Contact/>
    </div>
  )
}

export default App