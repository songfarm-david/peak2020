import React from "react"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

import blogStyles from "../../styles/posts.module.scss"

const FeaturedPost = ({ postData }) => ( 
    <article className={`${blogStyles.blogSectionContainer} ${blogStyles.featuredPost}`}>
        <BlogHeading headingText="Featured Blog Articles" />
        <div className={blogStyles.blogInner}>
            <BlogPost isFeaturedPost={true} postData={postData} />
        </div>
    </article>
)

export default FeaturedPost