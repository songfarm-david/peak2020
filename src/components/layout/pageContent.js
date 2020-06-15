import React from "react"
import PropTypes from 'prop-types';

import ReactHtmlParser from 'react-html-parser';
import { formatTitle } from "../../functions/helperFunctions"

import pageContentStyles from "./pageContent.module.scss"

import ServiceCard from "./services/serviceCard"

/**
 * Parses props to determine what kind of content is being passed in
 * Options include:
 * a Page (pageData), a Component (children)
 * 
 * @param {Str} props.path a page title used to add as classname to the component 
 * @param {Str} props.type (optional) a modifier to trigger a specific condition
 */
const PageContent = ({path, content, type, children}) => {
    console.log('pageContent props', path, content, type, children);

    const pContent = (content) ? (content.wordpressPage || content.allWordpressPage) : {}

    // console.log('about.js. content is array?', pContent instanceof Array);
    // console.log('about.js. content is obj?', pContent instanceof Object);

    // console.log('pContent?', pContent.content);
        
    return (
        <div className={(type === 'blog') ?
            pageContentStyles.blogContent : pageContentStyles.pageContent + " " + formatTitle(path.toLowerCase())}>{ 

            (type === 'services') && pContent.edges.map(( service, idx ) => (
                <div className={pageContentStyles.pageContentInner} key={idx}>
                    <ServiceCard service={service} />
                </div> )) || 

            (type === 'page' && pContent) && <div className={pageContentStyles.pageContentInner}>
                    {ReactHtmlParser(pContent.content)}
                </div> ||

            (type === 'contact') && <div className={pageContentStyles.pageContentInner}>
                    {children}
                </div>
            /* check for content from a page,
             if not that, check if this is 'service page' content
             otherwise, output the direct children passed into the component */
            /* (page) ? 
                <div className={pageContentStyles.pageContentInner}>
                    {ReactHtmlParser(content)}
                </div> : 
            (type === 'services') ? 
                children.edges.map(( node, index ) => (
                    <ServiceCard service={ node } key={ index } />
                )) : (
                    <div className={pageContentStyles.pageContentInner}>
                        {content}
                    </div>
                ) */
             
        }</div>
    )    
    
}

export default PageContent

PageContent.propTypes = {
    path: PropTypes.string.isRequired,
    type: PropTypes.string
}