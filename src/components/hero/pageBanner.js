/**
 * Banner component
 * Should take a title prop from parent
 * pop out the right background and text
 */
import React from "react"

import "./pageBanner.scss"

function removeDash(pageTit) {
    let p = pageTit.replace(/-/, ' ')
    return p
}

const PageBanner = ({pageTitle}) => (
    <div className={"page-banner " + pageTitle}>
        <h1>{removeDash(pageTitle)}</h1>
    </div>
)

export default PageBanner