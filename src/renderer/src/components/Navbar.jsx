import { Link } from 'react-router-dom'
import Home from '../assets/Home.svg'
import dashboard from '../assets/dashboard.svg'
import setting from '../assets/setting.svg'
import logout from '../assets/logout.svg'
import logo from '../assets/logo.jpg'

function Navbar() {
  return (
    <nav className="sidebar">
      <img draggable="false" alt="Logo" className="logo" src={logo} />
      <ul>
        <li>
          <Link to="/">
            <img draggable="false" alt="Home icon" src={Home} />
          </Link>
        </li>
        <li>
          <Link to="/Stat">
            <img draggable="false" alt="Dashboard icon" src={dashboard} />
          </Link>
        </li>
        <li className="last">
          <Link to="/Setting">
            <img draggable="false" alt="Settings icon" src={setting} />
          </Link>
        </li>
      </ul>
      <Link to="/" className="bottom">
        <img draggable="false" alt="Logout icon" src={logout} style={{ width: '40px' }} />
      </Link>
    </nav>
  )
}

export default Navbar
