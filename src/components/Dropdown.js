import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'flex flex-row text-center justify-around text-white shadow-sm'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to="/" className="p-2 mx-4 border-2 rounded-md">
        Home
      </Link>
      <Link to="/about" className="p-2 mx-4 border-2 rounded-md">
        About
      </Link>
      <Link to="/contact" className="p-2 mx-4 border-2 rounded-md">
        Contact
      </Link>
      <Link to="/projects" className="p-2 mx-414 border-2 rounded-md">
        Projects
      </Link>
    </div>
  )
}

export default Dropdown
