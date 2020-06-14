import React from "react"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

/**
 * Returns an index of all blog posts
 * 
 * @param {Obj} param0 Object containing (limit of 6) blog posts
 */
const AllPosts =({allPosts}) => {
    console.log('AllPosts?', allPosts);
    
    return (
        <section className="blog-content-container">
            <BlogHeading headingText="Latest Blog Articles" />
            <div className="blog-inner-container">
                {allPosts.edges.map(({ node }, idx) => (
                    <BlogPost postData={node} key={idx} />
                ))}  
            </div>
        </section>
    )
}

export default AllPosts