import React from "react"
import { formatTitle } from "../../functions/helperFunctions"
import ReactHtmlParser from 'react-html-parser';

import pageContent from "./pageContent.module.scss"
import ServiceCard from "./services/serviceCard"
import FeaturedImage from "../blog/blog-components/featuredImage"

const PageContent = ( props ) => {
    console.log('pageContent props', props);
    
    const { path, pageData: page, children, type } = props || {}

    const { title, content, featured_media } = page || {}
    console.log('what is content', content);
    console.log('what is children', children);

    return (
        <div className={pageContent.pageContent + " " + formatTitle(path.toLowerCase())}>{ 
            /* check for content from a page,
             if not that, check if this is 'service page' content
             otherwise, output the direct children passed into the component */
            (content) ? 
                ReactHtmlParser(content) : 
            (type === 'services') ? 
                children.edges.map(( node, index ) => (
                    <ServiceCard service={ node } key={ index } />
                )) : 
            children 
        }</div>
    )    
    
}

export default PageContent