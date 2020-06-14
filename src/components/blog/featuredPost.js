import React from "react"

import "../../styles/blog/blogIndex.scss"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

const FeaturedPost = (props) => {
    console.log('FeaturedPost props:', props);
    
    return (
    <article className="blog-content-container">
        <BlogHeading headingText="Featured Blog Articles" />
        
        <div className="blog-inner-container">
            <BlogPost isFeaturedPost={true} postData={props} />
        </div>
        
    </article>
)}

export default FeaturedPost