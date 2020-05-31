/**
 * Banner component
 * Should take a title prop from parent
 * pop out the right background and text
 */
import React from "react"

import "./pageBanner.scss"

const PageBanner = ({pageTitle}) => (
    <div className={"page-banner " + pageTitle}>
        <h1>{pageTitle}</h1>
    </div>
)

export default PageBanner