import React from "react"
import { removeDash, formatTitle } from "../../functions/helperFunctions"
import ReactHtmlParser from 'react-html-parser';

import "./pageBanner.scss"

/**
 * Page Banner 
 * Appears on all pages (except home page)
 * @param {String} pageTitle a page title
 * @param {String} parent a parent page
 */
const PageBanner = ({pageTitle, parent}) => {

    // if (parent === null) parent = ""
    const parEl = (parent !== undefined) ? parent : ''

    return (
    <div className={(true === parEl.includes('/services/')) ? 
        "page-banner web-services " + formatTitle(pageTitle) : 
        "page-banner " + formatTitle(pageTitle)}>
        <h1>{
            ReactHtmlParser(removeDash(pageTitle))
        }</h1>
    </div>
)}

export default PageBanner