import React from "react"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

import "../../styles/posts.scss"

const FeaturedPost = ({ postData }) => (
    <article id="featuredPost" className={"blog_section"}>
        <BlogHeading headingText="Featured Blog Articles" />
        <div>
            <BlogPost isFeaturedPost={true} postData={postData} />
        </div>
    </article>
)

export default FeaturedPost