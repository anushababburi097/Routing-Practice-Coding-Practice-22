// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <h1 className="name">Wave</h1>
    </div>
    <ul className="header-container">
      <li>
        <Link className="nav-list" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-list" to="about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-list" to="contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
