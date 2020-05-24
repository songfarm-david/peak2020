import { Link } from "gatsby"
import React from "react"

import siteLogo from "../images/peak_websites_logo.png";

import "./header.scss"
import Nav from "./nav"

const Header = ({ siteTitle, menuLinks }) => (
  <header id="siteHeader">
    <div>
      <h1 className="siteName">
        <Link
          to="/">
          <img src={siteLogo} className="siteLogo" alt="Peak Websites logo" />
          {siteTitle}
        </Link>
      </h1>
      <Nav menuLinks={menuLinks} />
    </div>
  </header>
)

export default Header
