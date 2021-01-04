import React, { useState } from 'react'
import { Link } from "gatsby"
import Hamburger from "../nav/hamburger"

import headerStyles from "./header.scss"
import Nav from "../nav/nav"
import siteLogo from "../../images/logo/Logo.svg";

const Header = ({ siteTitle, styleClass }) => {
    const [isMenuOpen, toggleMenu] = useState(false)
    return (
        <header id={'siteHeader'} className={styleClass}>
            <div id={'headerInnerContainer'}>
                <Link to="/">
                    <img id={'siteLogo'} src={siteLogo} alt={"Peak Websites Home"} />
                    <h1 className="screen_reader_text">{siteTitle}</h1>
                </Link>
                <div onClick={() => toggleMenu( !isMenuOpen )}>
                    <Nav menuToggleClass={( isMenuOpen ) ? 'menu-active' : null} />
                    <Hamburger isActive={ isMenuOpen } />
                </div>  
            </div>
        </header>
    )
}

export default Header