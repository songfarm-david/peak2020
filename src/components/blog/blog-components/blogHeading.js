import React from "react"

import "./blogHeading.scss"

const BlogHeading = ({ headingText, className }) => {
    console.log('BlogHeading class?', className);
    let callOutClass = (className) ? className : null

    return (
        <div className={`blogHeading ${(callOutClass) ? callOutClass : ''}`}>
            <h2 className={`heading heading-5`}>{headingText}</h2>
            <span className={`barline`}></span>
        </div>
    )
}

export default BlogHeading