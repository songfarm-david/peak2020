import React, { useState } from 'react'
import { Link } from "gatsby"

import siteLogo from "../images/logo/Logo.svg";

import "./header.scss"

import Nav from "./nav"

const Header = ({ siteTitle, menuLinks }) => {
  
  const [isMenuOpen, toggleMenu] = useState(true)

  return (
    <header id="siteHeader">
      <div>
        <Link to="/">
          <img id="siteLogo" src={siteLogo} alt={""} />
          <h1 className="screen-reader-text">{siteTitle}</h1>
        </Link>
        <Nav menuLinks={menuLinks} className={(!isMenuOpen) ? 'menu-active' : 'menu-not-active'}/>
        <button id="menuToggleBtn" isOpen={isMenuOpen} onClick={() => toggleMenu(!isMenuOpen)}>X</button>
      </div>
    </header>
  )
}

export default Header

