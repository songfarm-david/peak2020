import React from "react"
import { formatTitle } from "../../functions/helperFunctions"
import ReactHtmlParser from 'react-html-parser';

import pageContent from "./pageContent.module.scss"
import ServiceCard from "./services/serviceCard"

const PageContent = ( props ) => {
    
    const { path, pageData: page, children, type } = props || {}
    const { content } = page || {}

    let title = formatTitle(path.toLowerCase())

    return (
        <div className={(type === 'blog') ?
            pageContent.blogContent : pageContent.pageContent + " " + title}>{ 
            /* check for content from a page,
             if not that, check if this is 'service page' content
             otherwise, output the direct children passed into the component */
            (content) ? 
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