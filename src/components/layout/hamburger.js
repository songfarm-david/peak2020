import React, {useState} from "react"

import "./hamburger.scss"

const Hamburger = (props) => {
    console.log('hamburger props', props);

    const [isActive, toggleActiveState] = useState(false)

    const activeClass = (isActive) ? `is-active hamburger hamburger--3dx` : `hamburger hamburger--3dx`

    return (
    <button id="menuToggleBtn" type="button" className={activeClass} onClick={() => toggleActiveState(!isActive)}>
        <span className="hamburger-box">
            <span className="hamburger-inner"></span>
        </span>
    </button>
)}

export default Hamburger