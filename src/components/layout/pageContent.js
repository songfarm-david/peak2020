import React from "react"
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import pageContentStyles from "./pageContent.module.scss"

/**
 * Parses props to determine what kind of content is being passed in
 * Options include:
 * a Page (pageData), a Component (children)
 * 
 * @param {Str} props.path a page title used to add as classname to the component 
 * @param {Str} props.type (optional) a modifier to trigger a specific condition
 */
const PageContent = ({ path, type, content, children }) => {
    console.log('pageContent type, content', type, content, children);

    return (
        <div className={(type === 'post') ? pageContentStyles.blogContent : pageContentStyles.pageContent}>{ 
            <div className={pageContentStyles.pageContentInner}>
                {( children ) ? children : ReactHtmlParser(content)}
            </div>          
        }</div>
    )    
    
}

export default PageContent

PageContent.propTypes = {
    path: PropTypes.string,
    type: PropTypes.string
}