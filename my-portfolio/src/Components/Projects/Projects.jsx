import React from 'react'
import Baselance from '../../assets/baselancejpg.png'

const Projects = () => {
  return (
    <div className='flex gap-12 mt-40 ml-10'>
    <div className='h-120 w-100 border-grey-400 border rounded-2xl'><img src={Baselance} alt="baselance image" className='w-120 h-60 rounded-2xl'/></div>
     <div className='h-120 w-100 border-grey-400 border rounded-2xl'><img src={Baselance} alt="baselance image" className='w-120 h-60 rounded-2xl'/></div>
      <div className='h-120 w-100 border-grey-400 border rounded-2xl'><img src={Baselance} alt="baselance image" className='w-120 h-60 rounded-2xl'/></div>

    </div>
  )
}

export default Projects