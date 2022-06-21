import { Link, NavLink } from 'react-router-dom'

import Monogram from '../assets/images/jm-logo.png'

const Navigation = ({ toggle }) => {
  return (
    <>
      <nav
        className="flex justify-between py-2 shadow-md items-center min-w-full h-16 text-black relative font-kannada"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          <img
            className="md:object-scale-down h-16 w-16"
            src={Monogram}
            alt="mongoram"
          />
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:flex hidden flex-row">
          <NavLink className="p-4" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id=""
              className="h-14 w-14"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </NavLink>
          <NavLink className="p-4 " to="/about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
          <NavLink className="p-4 " to="/contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </NavLink>
          <NavLink className="p-4 " to="/projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navigation
