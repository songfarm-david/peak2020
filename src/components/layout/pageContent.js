import React from "react"
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import FeaturedImage from "../blog/blog-components/featuredImage"

/**
 * Parses props to determine what kind of content is being passed in
 * Options include:
 * a Page (pageData), a Component (children)
 * 
 * @param {Str} path a page title used to add as classname to the component 
 * @param {Str} type (optional) a modifier to trigger a specific condition
 */
const PageContent = ({ path = "", type = 'page', content, children, featuredMedia = false }) => {
    
    // console.log('pageContent', path, type, content);

    return (
        <div id="pageContent" className={(type === 'services') ? `section_container section_container__services ${path}` : `section_container ${path}`}>

            {( children ) ? 
                <div className={(path !== 'contact-us') ? `section_content section_container__inner ${path}` : `${path}`}>
                    {children}
                </div> :
                <div className={"section_content section_container__inner"}>
                    {ReactHtmlParser(content)}
                </div>}

            {/* <div className={"section_content section_container__inner section_container__featured_image"}>
                {( featuredMedia ) ?
                    <FeaturedImage featuredImage={featuredMedia} isPageFeature={true} /> 
                    : false }
            </div> */}

            {featuredMedia && 
            <div className={"section_content section_container__inner section_container__featured_image"}>
                <FeaturedImage featuredImage={featuredMedia} isPageFeature={true} /> 
            </div>}

        </div>
    )

}

export default PageContent

PageContent.propTypes = {
    path: PropTypes.string,
    type: PropTypes.string
}