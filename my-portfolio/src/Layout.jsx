import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './Components/NavBar/NavBar'


function Layout() {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default Layout
