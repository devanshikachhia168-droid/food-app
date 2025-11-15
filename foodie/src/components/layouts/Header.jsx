import React from 'react'
import img1 from '../../assets/images/img1.png'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <img src={img1} alt="" />
        </div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Service</Link>
        </div>
      </div>
    </div>
  )
}
