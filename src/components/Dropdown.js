import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center shadow-sm'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to="/" className="p-2">
        Home
      </Link>
      <Link to="/about" className="p-2">
        About
      </Link>
      <Link to="/contact" className="p-2">
        Contact
      </Link>
      <Link to="/projects" className="p-2">
        Projects
      </Link>
    </div>
  )
}

export default Dropdown
