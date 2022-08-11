import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faReddit,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import './Sidebar.scss';

const Sidebar = () => (
  <>
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="devhadym" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/hady-mohamed-709307187/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/HadyM">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Hady_Mohamed_87"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.reddit.com/user/PhoenixNile"
          >
            <FontAwesomeIcon icon={faReddit} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  </>
);

export default Sidebar;
