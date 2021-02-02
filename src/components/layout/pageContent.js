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
const PageContent = ({ 
    path = "", 
    type = 'page', 
    content, 
    children, 
    featuredMedia = false }) => {
    
    console.log('pageContent path:', path, '\ntype:', type, '\ncontent:', content, '\nchildren:', children, '\nfeaturedMedia', featuredMedia);

    return (
        <div id="pageContent" className={`section_container ${path}`}>

            {(type === 'page') &&
                <div className={`section_content`}>
                    {children}
                </div>
            }

            {/* Because a content property is passed to this component from BlogPostTemplate page, we use dangerouslySetInnerHTML */}
            {(type === 'post') &&
                <div className={`section_content section_container__inner`} dangerouslySetInnerHTML={{ __html: content }} />
            }

            {/* TODO: I forget what this is about */}
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