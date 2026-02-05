import React from 'react'

const Contact = () => {
  return (
    <div className='flex center items-center justify-center m-0 gap-30'>
      <div>
        <h1>Let's Create Together</h1>
        <span>I'm always excited to work with fellow developers, potential clients, and anyone passionate about technology. Whether you have a project in mind or you just want to say hello, I'm here to collaborate</span>
      </div>
      <div>
        <h1>Quick Links</h1>
        <div>
          <div className='flex'>
          <li>About</li>
          <li>Articles</li>
          <li>Resume</li>
          </div>
          <div>Projects</div>
          <li>Contact</li>
          <li>Skills</li>
        </div>
      </div>
      <div><h1>Get in Touch</h1>
      <div className='flex-col'>
        <span>Have a project in mind? Let's discuss how we can work together to bring your projects back to life</span>
        </div>
        <button className='pointer-cursor'><img></img>Send me a mail</button>
      </div>
      
    </div>
  )
}

export default Contact