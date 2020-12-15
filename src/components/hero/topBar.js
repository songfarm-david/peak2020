import React from "react"
import { Link } from "gatsby"
import "./topBar.scss"

const TopBar = () => {

    return (
        <div id="topBar">
            <div><Link to={"/services/seo-services/local-seo-packages/"}>Check Out - Local SEO Packages Available</Link></div>
        </div>
    )
}

export default TopBar