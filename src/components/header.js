import React from "react"
import { Link } from "gatsby"

import siteLogo from "../images/logo/Logo.png";

import "./header.scss"

import Nav from "./nav"


const Header = ({ siteTitle, menuLinks }) => (
  <header id="siteHeader">
    <div>
      <Link to="/">
        <img id="siteLogo" src={siteLogo} alt={""} />
        <h1 className="screen-reader-text">{siteTitle}</h1>
      </Link>
      
      
      <Nav menuLinks={menuLinks} />
    </div>
  </header>
)

export default Header
