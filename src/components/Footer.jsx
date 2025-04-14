import React from 'react'
import logo from '../logo/github.png'

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center bg-teal-300 rounded-lg p-2.5 px-4 shadow-lg mt-10 mb-2">
  <a href="https://github.com/theanuraaag" className="text-black no-underline flex items-center gap-1">
    <img src={logo} alt="GitHub" className="w-5 h-5" />
    GitHub
  </a>
</footer>

    
  )
}
