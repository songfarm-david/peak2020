import React, { useState } from 'react'
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import Nav from "../nav/nav"
import siteLogo from "../../images/logo/Logo.svg";

const Header = ({ siteTitle, menuLinks }) => {
  
  const [isMenuOpen, toggleMenu] = useState(false)
  
  return (
    <header id={headerStyles.siteHeader}>
      <div id={headerStyles.headerInnerContainer}>
        <Link to="/">
          <img id={headerStyles.siteLogo} src={siteLogo} alt={""} />
          <h1 className="screen-reader-text">{siteTitle}</h1>
        </Link>
        <Nav 
          menuLinks={menuLinks} 
          menuToggleClass={( isMenuOpen ) ? 'menu-active' : null }
        />
        <button id={headerStyles.menuToggleBtn} onClick={() => toggleMenu( !isMenuOpen )}>X</button>
      </div>
    </header>
  )
}

export default Header

