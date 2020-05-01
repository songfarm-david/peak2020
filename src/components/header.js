import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./nav"
import "../styles/header.scss"

import siteLogo from "../images/peak_websites_logo.png";

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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
