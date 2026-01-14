import React from 'react'
import Hero from './Components/Hero/hero'
import NavBar from './Components/NavBar/NavBar'
import {Route} from 'react-router'

const App = () => {
  return (
    <>
    <Route path="">
      <NavBar />
    </Route>
    <Route path="./Hero"> 
      <Hero />
    </Route> 
    </>
  )
}

export default App