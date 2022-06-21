import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const showPDF = (directory) => {
  window.open(directory)
}

const Footer = () => {
  return (
    <footer className="h-16 flex-col flex w-full justify-end items-end ">
      <ul className=" w-full inline-flex justify-center items-center">
        <li className="p-4 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/joseph-murray-jr/"
          >
            <FontAwesomeIcon
              className="h-12"
              icon={faLinkedin}
              color="#1B1A23"
            />
          </a>
        </li>
        <li className="p-4 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JosephLMurray"
          >
            <FontAwesomeIcon className="h-12" icon={faGithub} color="#1B1A23" />
          </a>
        </li>
        <li className="p-4 ">
          <a target="_blank" href="../../assets/docs/resume.pdf">
            <FontAwesomeIcon
              className="h-12"
              icon={faFileArrowDown}
              color="#1B1A23"
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
