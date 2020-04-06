import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./nav"
import "../styles/header.scss"

const Header = ({ siteTitle, menuLinks }) => (
  <header id="siteHeader">
    <div>
      <h1 className="siteName">
        <Link
          to="/">
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
