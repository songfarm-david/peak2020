import React from "react"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

import "../../styles/blog/posts.scss"

const FeaturedPost = ({ postData }) => (
    <article id="featuredPost" className={"blogSectionContainer"}>
        <BlogHeading headingText="Featured Blog Articles" />
        <div className={"blogInner"}>
            <BlogPost isFeaturedPost={true} postData={postData} />
        </div>
    </article>
)

export default FeaturedPost