import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-6 font-medium text-lg px-10 bg-[#592693] text-white'>
        <h1>Buzzz</h1>
        <p>Built with ❤️ and stress 😩 by <Link to="https://twitter.com/divine_edeh1">Divine Edeh</Link></p>
    </div>
  )
}

export default Footer