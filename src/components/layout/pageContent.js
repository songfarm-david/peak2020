import React from "react"
import { formatTitle } from "../../functions/helperFunctions"
import ReactHtmlParser from 'react-html-parser';

import pageContent from "./pageContent.module.scss"
import ServiceCard from "./services/serviceCard"

/**
 * Parses props to determine what kind of content is being passed in
 * Options include:
 * a Page (pageData), a Component (children)
 * 
 * @param {Str} props.path a page title used to add as classname to the component 
 * @param {Str} props.type (optional) a modifier to trigger a specific condition
 */
const PageContent = ( props ) => {
    console.log('pageContent props', props);
    
    /* check for pageData first, which overrides all component conditionals */
    const { 
        path, 
        pageData: page, 
        children, 
        type } = props || {}

    // console.log('is page?', page);

    const { content } = page.wordpressPage || page || {}
    // console.log('what is content', content);

    let title = formatTitle(path.toLowerCase())
        
    return (
        <div className={(type === 'blog') ?
            pageContent.blogContent : pageContent.pageContent + " " + title}>{ 
            /* check for content from a page,
             if not that, check if this is 'service page' content
             otherwise, output the direct children passed into the component */
            (page) ? 
                <div className={pageContent.pageContentInner}>
                    {ReactHtmlParser(content)}
                </div> : 
            (type === 'services') ? 
                children.edges.map(( node, index ) => (
                    <ServiceCard service={ node } key={ index } />
                )) : (
                    <div className={pageContent.pageContentInner}>
                        {children}
                    </div>
                )
             
        }</div>
    )    
    
}

export default PageContent