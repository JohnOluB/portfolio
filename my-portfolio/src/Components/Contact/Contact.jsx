import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center mt-[150px] gap-30 text-3xl'>
      <div>
        <h1>Let's Create Together</h1>
        <span>I'm always excited to work with fellow developers, potential clients, and anyone passionate about technology. Whether you have a project in mind or you just want to say hello, I'm here to collaborate</span>
      </div>
      <div>
        <h1 className='flex justify-center items-center'>Quick Links</h1>
        <div className='flex gap-10'>
          <div className=''>
            <p>About</p>
            <p>Articles</p>
            <p>Resume</p>
          </div>
          <div className=''>
            <p>Projects</p>
            <p>Contact</p>
            <p>Skills</p>
          </div>
        </div>
      </div>
      <div><h1>Get in Touch</h1>
      <div className='flex-col'>
        <span>Have a project in mind? Let's discuss how we can work together to bring your projects back to life</span>
        </div>
        <button className='cursor-pointer'><img></img>Send me a mail</button>
      </div>
      
    </div>
  )
}

export default Contact