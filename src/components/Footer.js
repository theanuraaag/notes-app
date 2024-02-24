import React from 'react'
import logo from '../logo/github.png'

export default function Footer() {
  return (
    <div className='footer'>
        <p>Created by <a href="https://www.linkedin.com/in/theanuraaag/">Anurag Bhardwaj </a></p>
        <a href="https://github.com/theanuraaag"><img src={logo} alt="github" /></a>

    </div>
  )
}
