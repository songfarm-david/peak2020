import React from "react"

import blogHeadingStyles from "./blogHeading.module.scss"

const BlogHeading = ({ headingText, className }) => {
    // console.log('BlogHeading class?', className);
    
    let callOutClass = (className) ? className : null

    return (
        <div className={( callOutClass ) ? 
            `${blogHeadingStyles.callOutClass} ${blogHeadingStyles.blogHeading}` : 
            `${blogHeadingStyles.blogHeading}`}>
            <h2 className={`${blogHeadingStyles.heading} heading-5`}>{headingText}</h2>
            <span className={blogHeadingStyles.barline}></span>
        </div>
    )

}

export default BlogHeading