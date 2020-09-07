import React from "react"
import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

import "../../styles/posts.scss"

/**
 * Returns an index of all blog posts
 * 
 * @param {Obj} param0 Object containing (limit of 6) blog posts
 */
const AllPosts =({ allPosts }) => {
    // console.log('what is allPosts', allPosts);
    return (
    <section id="blogIndex" className={"blog_section"}>
        <BlogHeading headingText="Latest Blog Articles" />
        <div className={"blog_section__inner"}>
            {allPosts.edges.map(({ node }, idx) => (
                (idx > 5 || node.sticky !== false) ? null :
                <BlogPost postData={node} key={idx} />
            ))} 
        </div> 
    </section>
)}

export default AllPosts