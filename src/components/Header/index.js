import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import Logo from './../../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={Logo} alt="da terra crystals logo" />
          </Link>
        </div>
        <div className='calls-to-action'>
          <ul>
            <li>
              <Link to="/registration">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
