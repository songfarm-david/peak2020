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

    // const includesStr = (str, textStr) => {
    //     if (!str) return
    //     let s = str.toString()
    //     return s.includes(textStr) ? true : false
    // }

    return (
        <div className={pageContent.pageContent + " " + formatTitle( path.toLowerCase() )}>
            {(content) ? ReactHtmlParser(content) : children}
        </div>
    )    
    
}

export default PageContent

// return ( 
//     <div className={pageContent.pageContent + " " + formatTitle( path.toLowerCase() )}>
//         {Array.isArray(children) && children.map(( node, idx ) => (
//             ( includesStr(node.props.className, 'heroImage') ) ?  
//                 <div key={idx} className={pageContent.heroImage}>
//                     {node.props.children}
//                 </div> : 
//             ( includesStr(node.props.className, 'heroText') ) ?  
//                 <div key={idx} className={pageContent.heroText}>
//                     {node.props.children}
//                 </div> : 
//             ( includesStr(node.props.className, 'heroBody') ) ? 
//                 <div key={idx} className={pageContent.heroBody}>
//                     {node.props.children}
//                 </div> : null ))}  
        
//         {(type && type === 'services') &&
//             children.edges.map(( node, index ) => (
//                 <ServiceCard service={ node } key={ index } />
//             ))}

//         {(pageData) && (
//             <div className={pageContent.body}>
//                 <FeaturedImage featuredImage={pageData.imgPath} />
//                 {ReactHtmlParser(pageData.content)}
//             </div>
//         )}
    
//        {/* this catches all regular content that isn't hero or service content */        
//             (!type) ? children : "" 
//         }
//     </div>
// )