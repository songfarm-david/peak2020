/**
 * Banner component
 * Should take a title prop from parent
 * pop out the right background and text
 */
import React from "react"
import { removeDash, formatTitle } from "../../functions/functions"
import ReactHtmlParser from 'react-html-parser';

import "./pageBanner.scss"

const PageBanner = ({pageTitle, parent}) => {
    // console.log(pageTitle, parent);

    if (parent === null) parent = ""
    
    const parEl = (parent !== undefined) ? parent : ''
    // const pTitle = pageTitle.toString()
    // pTitle = removeDash(pTitle)
    return (
    <div className={(true === parEl.includes('/services/')) ? 
        "page-banner web-services " + formatTitle(pageTitle) : 
        "page-banner " + formatTitle(pageTitle)
        }>

        <h1>{ReactHtmlParser(removeDash(pageTitle))}</h1>
    </div>
)}

export default PageBanner