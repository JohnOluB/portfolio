import React from 'react'
import {NavLink} from 'react-router'


const NavBar = () => {
  return (
      <nav className="flex mt-4 text-2xl">
         <span className='flex-1 ml-3'>JOHN ADEBAYO</span>
        <div className='mr-20'>
          <NavLink to='/' className={({isActive})=>isActive ? 'text-orange-700':'text-grey-700'}>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='Projects'>Projects</NavLink>
          <NavLink to='Articles'>Articles</NavLink>
          <NavLink to='Contact'>Contact</NavLink>  
          <img src="" alt="oi" />
        </div>
      </nav>
    
  )
}

export default NavBar