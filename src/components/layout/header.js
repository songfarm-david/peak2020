import React, { useState } from 'react'
import { Link } from "gatsby"
import Hamburger from "./hamburger"

import headerStyles from "./header.module.scss"
import Nav from "../nav/nav"
import siteLogo from "../../images/logo/Logo.svg";

const Header = ({ siteTitle }) => {
    const [isMenuOpen, toggleMenu] = useState(false)
    return (
        <header id={headerStyles.siteHeader}>
            <div id={headerStyles.headerInnerContainer}>
                <Link to="/">
                    <img id={headerStyles.siteLogo} src={siteLogo} alt={""} />
                    <h1 className="screen-reader-text">{siteTitle}</h1>
                </Link>
                <button onClick={() => toggleMenu( !isMenuOpen )}>
                    <Nav menuToggleClass={( isMenuOpen ) ? 'menu-active' : null} />
                    <Hamburger isActive={ isMenuOpen } />
                </button>  
            </div>
        </header>
    )
}

export default Header