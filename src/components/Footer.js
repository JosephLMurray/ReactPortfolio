import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './index.scss'

const showPDF = (directory) => {
  window.open(directory)
}

const Footer = () => {
  return (
    <footer className="h-1/6">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/joseph-murray-99374522b/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#1B1A23" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JosephLMurray"
          >
            <FontAwesomeIcon icon={faGithub} color="#1B1A23" />
          </a>
        </li>
        <li>
          <a target="_blank" href="../../assets/docs/resume.pdf">
            <FontAwesomeIcon icon={faFileArrowDown} color="#1B1A23" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
