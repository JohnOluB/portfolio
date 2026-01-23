import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div className="flex-center justify-center items-center direction-row gap-5">
          <p>Home</p>
          <p>Projects</p>
          <p>Skills</p>
          <p>Contact</p>
      </div>
    </nav>
  )
}

export default NavBar