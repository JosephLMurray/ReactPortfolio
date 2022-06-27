import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import pdf from '../assets/docs/resume.pdf'

const Footer = () => {
  return (
    <div className="h-16 flex-col flex w-full justify-center items-center relative bottom-0 ">
      <ul className=" w-full inline-flex justify-center items-center">
        <li className="p-4 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/joseph-murray-jr/"
          >
            <FontAwesomeIcon
              className="h-12 hover:text-secondary"
              icon={faLinkedin}
              color="#d3dce6"
            />
          </a>
        </li>
        <li className="p-4 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JosephLMurray"
          >
            <FontAwesomeIcon
              className="h-12 hover:text-secondary"
              icon={faGithub}
              color="#d3dce6"
            />
          </a>
        </li>
        <li className="p-4 ">
          <a target="_blank" href={pdf} rel="noreferrer">
            <FontAwesomeIcon
              className="h-12 hover:text-secondary"
              icon={faFileArrowDown}
              color="#d3dce6"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
