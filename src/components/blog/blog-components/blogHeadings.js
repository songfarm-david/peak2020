import React from "react"

import blogHeadingStyles from "./blogHeading.module.scss"

const BlogHeading = ({ headingText, className }) => {
    
    let callOutClass = (className) ? className : null

    return (
        <div className={(callOutClass) ? 
            `${blogHeadingStyles.callOutClass} ${blogHeadingStyles.blogHeading}` : 
            `${blogHeadingStyles.blogHeading}`}>
            <h5>{headingText}</h5>
            <span className={blogHeadingStyles.barline}></span>
        </div>
    )

}

export default BlogHeading