import React from "react"
import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"
import blogStyles from "../../styles/posts.module.scss"

/**
 * Returns an index of all blog posts
 * 
 * @param {Obj} param0 Object containing (limit of 6) blog posts
 */
const AllPosts =({allPosts}) => (
    <section id="allPosts" className={blogStyles.blogSectionContainer}>
        <BlogHeading headingText="Latest Blog Articles" />
        <div className={blogStyles.blogInner}>
            {allPosts.edges.map(({ node }, idx) => (
                <BlogPost postData={node} key={idx} />
            ))}  
        </div>
    </section>
)

export default AllPosts