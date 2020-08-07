import React from "react"
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import FeaturedImage from "../blog/blog-components/featuredImage"

import pageContentStyles from "./pageContent.module.scss"

/**
 * Parses props to determine what kind of content is being passed in
 * Options include:
 * a Page (pageData), a Component (children)
 * 
 * @param {Str} props.path a page title used to add as classname to the component 
 * @param {Str} props.type (optional) a modifier to trigger a specific condition
 */
const PageContent = ({ path = "", type, content, children, featuredMedia = false }) => {
    console.log('PageContent path, type', path, type);
    
    return (
    <div id="pageContent" className={`section_container ${path}`}>

            {( children ) ? 
                <div className={`section_container__inner ${path}`}>
                    {children}
                </div> :
                <div className={"section_content"}>
                    {ReactHtmlParser(content)}
                </div>}

            {( featuredMedia ) ?
                <FeaturedImage featuredImage={featuredMedia} isPageFeature={true} /> 
                : false }

    </div>
)}

export default PageContent

PageContent.propTypes = {
    path: PropTypes.string,
    type: PropTypes.string
}