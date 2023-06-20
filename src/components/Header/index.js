// Write your code here

import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="nav-container">
    <Link to="/">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu />
        </button>
      }
    >
      {close => (
        <div className="popup-container">
          <button
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="30" color="#616e7c" />
          </button>
          <ul className="nav-link-list">
            <li className="nav-link-item">
              <Link className="nav-link" to="/" onClick={() => close()}>
                <AiFillHome size="36" />
                <p className="nav-link-content">Home</p>
              </Link>
            </li>
            <li className="nav-link-item">
              <Link className="nav-link" onClick={() => close()} to="/about">
                <BsInfoCircleFill size="32" />
                <p className="nav-link-content">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)
export default withRouter(Header)
