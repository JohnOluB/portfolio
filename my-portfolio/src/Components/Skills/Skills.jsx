import React from 'react'
import reactLogo from "../../assets/react.svg"
import nextjsLogo from "../../assets/Next.js.svg"
import tailwindLogo from "../../assets/Tailwind CSS.svg"
import javascriptLogo from "../../assets/Javascript.svg"
import typescriptLogo from "../../assets/Typescript.svg"
import mongodbLogo from "../../assets/MongoDB.svg"
import expressLogo from "../../assets/Express.svg"
import viteLogo from "../../assets/Vite.js.svg"

const Skills = () => {
  return (
    <div className='flex justify-center items-center gap-12'>
        <div className='h-30 w-30 border flex justify-center items-center'><img src={reactLogo} alt="react logo"/></div>
        <div className='h-30 w-30 border flex justify-center items-center'><img src={nextjsLogo} alt='nextjs logo' className="w-8"/></div>
        <div className='h-30 w-30 border flex justify-center items-center'><img src={tailwindLogo} alt='tailwind logo'/></div>
        <div className='h-30 w-30 border flex justify-center items-center'><img src={javascriptLogo} alt='javascript logo'/></div>
        <div className='h-30 w-30 border flex justify-center items-center'><img src={typescriptLogo} alt='typescript logo'/></div>
        <div className='h-30 w-30 border flex justify-center items-center'><img src={mongodbLogo} alt='mongodb logo'/></div>
        <div className='h-30 w-30 border flex justify-center items-center'><img src={expressLogo} alt='express logo'/></div>
        <div className='h-30 w-30 border flex justify-center items-center'><img src={viteLogo} alt='nodejs logo'/></div>
    </div>
  )
}

export default Skills