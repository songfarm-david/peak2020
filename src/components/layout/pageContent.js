import React from "react"
import { formatTitle } from "../../functions/helperFunctions"

import pageContent from "./pageContent.module.scss"

const PageContent = ({ path, children }) => {
    console.log('pageContent', path, children);

    // console.log(children.map((node, idx) => (node.props.children)));
    
    return (
    <div className={pageContent.pageContent + " " + formatTitle(path.toLowerCase())}>
        
        { Array.isArray(children) && children.map( ( node, idx ) => (
            ( node.props.className === 'heroImage' ) ?  
                <div className={pageContent.heroImage}>
                    {node.props.children}
                </div> 
            : 
            ( node.props.className === 'heroText' ) ?  
                <p className={pageContent.heroText}>
                    {node.props.children}
                </p> 
            : 
            ( node.props.className === 'heroBody' ) ? 
                <p className={pageContent.heroBody}>
                    {node.props.children}
                </p>
            : 
            <p>
             {node.props.children}
            </p> )) 

        || <div>{children}</div>}
        
    </div>
)}

export default PageContent