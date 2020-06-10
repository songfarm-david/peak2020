import React, { useState } from 'react'
import { Link } from "gatsby"

import siteLogo from "../../images/logo/Logo.svg";

import "./header.scss"

import Nav from "../nav/nav"

const Header = ({ siteTitle, menuLinks }) => {
  
  const [isMenuOpen, toggleMenu] = useState(false)
  
  return (
    <header id="siteHeader">
      <div>
        <Link to="/">
          <img id="siteLogo" src={siteLogo} alt={""} />
          <h1 className="screen-reader-text">{siteTitle}</h1>
        </Link>
        <Nav 
          menuLinks={menuLinks} 
          menuToggleClass={( isMenuOpen ) ? 'menu-active' : null }
        />
        <button id="menuToggleBtn" onClick={() => toggleMenu( !isMenuOpen )}>X</button>
      </div>
    </header>
  )
}

export default Header
