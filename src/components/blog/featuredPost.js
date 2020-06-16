import React from "react"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

import blogStyles from "../../styles/posts.module.scss"

const FeaturedPost = ({ postData }) => ( 
    <article id="featuredPost" className={blogStyles.blogSectionContainer}>
        <BlogHeading headingText="Featured Blog Articles" />
        <BlogPost isFeaturedPost={true} postData={postData} />
    </article>
)

export default FeaturedPost