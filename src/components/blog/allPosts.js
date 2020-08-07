import React from "react"
import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

import "../../styles/posts.scss"

/**
 * Returns an index of all blog posts
 * 
 * @param {Obj} param0 Object containing (limit of 6) blog posts
 */
const AllPosts =({allPosts}) => (
    <section id="blogIndex" className={"blog_section"}>
        <BlogHeading headingText="Latest Blog Articles" />
        {allPosts.edges.map(({ node }, idx) => (
            <BlogPost postData={node} key={idx} />
        ))}  
    </section>
)

export default AllPosts