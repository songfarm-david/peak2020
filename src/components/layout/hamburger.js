import React, {useState} from "react"

import "./hamburger.scss"

const Hamburger = ({isActive}) => {

    const activeClass = (isActive) ? `is-active hamburger hamburger--3dx` : `hamburger hamburger--3dx`

    return (
        <button id="menuToggleBtn" type="button" className={activeClass}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default Hamburger
// https://jonsuh.com/hamburgers/