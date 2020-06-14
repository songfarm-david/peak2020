import React, { useState } from 'react'
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"
import siteLogo from "../../images/logo/Logo.svg";

import Nav from "../nav/nav"
import Hamburger from "./hamburger"

const Header = ({ siteTitle, menuLinks }) => {
  
  const [isMenuOpen, toggleMenu] = useState(false)
  
  return (
    <header id={headerStyles.siteHeader}>
      <div id={headerStyles.headerInnerContainer}>
        <Link to="/">
          <img id={headerStyles.siteLogo} src={siteLogo} alt={""} />
          <h1 className="screen-reader-text">{siteTitle}</h1>
        </Link>
        <Nav menuLinks={menuLinks} menuToggleClass={( isMenuOpen ) ? 'menu-active' : null} onClick={() => alert('monkey')} />
        <Hamburger  />
      </div>
    </header>
  )
}

export default Header

