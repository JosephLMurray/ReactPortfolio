import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {
  faEnvelope,
  faHome,
  faThLarge,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#1B1A23" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/About"
        >
          <FontAwesomeIcon icon={faUser} color="#1B1A23" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/Contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#1B1A23" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/Projects"
        >
          <FontAwesomeIcon icon={faThLarge} color="#1B1A23" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Navigation
