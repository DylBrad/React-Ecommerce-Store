import React from 'react'
import './styles.scss'

import Logo from './../../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="da terra crystals logo" />
        </div>
      </div>
    </header>
  )
}

export default Header
