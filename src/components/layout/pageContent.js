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
    console.log('PageContent children, featuredMedia', children, featuredMedia);
    
    return (
    <div id="pageContent" className={
        (type === 'post') ?  `${pageContentStyles.blogContent} ${pageContentStyles.pageContent}` 
        : (type === 'services') ? `${pageContentStyles.servicePage} ${pageContentStyles.pageContent} ${path} section_container` 
            : (path === 'contact-us') ? `${pageContentStyles.contactUs} ${pageContentStyles.pageContent} ${path}` : (path === 'category') ? `${pageContentStyles.category} ${pageContentStyles.pageContent}`
                : `${pageContentStyles.pageContent} ${path} section_container`}>

            {( children ) ? 
                <div className={`section_container__inner ${path}`}>
                    {children}
                </div> : 
                <div className={(featuredMedia) ? 
                `${pageContentStyles.hasFeaturedImage} section_container__inner ${type} ${path}` 
                    : `${pageContentStyles.pageContentInner} section_container__inner ${type} ${path}`}>

            {( featuredMedia ) ? <FeaturedImage featuredImage={featuredMedia} isPageFeature={true} /> : false}

            {( children ) ? children : 
                <div className={"section_content"}>
                    {ReactHtmlParser(content)}
                </div>}

        </div>}
    </div>
)}

export default PageContent

PageContent.propTypes = {
    path: PropTypes.string,
    type: PropTypes.string
}