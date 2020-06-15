import React from "react"

// import "../../styles/blog/blogIndex.scss"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

const FeaturedPost = ({ postData }) => {
    console.log('FeaturedPost postData:', postData);
    
    return (
    <article className="blog-content-container">
        <BlogHeading headingText="Featured Blog Articles" />
        
        <div className="blog-inner-container">
            <BlogPost isFeaturedPost={true} postData={postData} />
        </div>
        
    </article>
)}

export default FeaturedPost