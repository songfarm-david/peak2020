import React from "react"
import { Link } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import MetaCard from "./metaCard"
import FeaturedImage from "./featuredImage"
import BlogMeta from "./blogMeta"

// import blogPostStyles from "./blogPost.module.scss"
import "../../../styles/theme-styles/layout.scss"
import "../../../styles/posts.scss"
import "../../../styles/blog/blogPost.scss"

const BlogPost = ({ type, postData, isFeaturedPost = false }) => {
    console.log('BlogPost type, postData, isFeaturedPost', type, postData, isFeaturedPost);

    const { path, title, excerpt, featured_media, ...metaProps } = postData

    return (
        <div className={
            (isFeaturedPost) ? "blog_post blog_post__featured_post" 
                : (type === "callout") ? "blog_post blog_post__callout" 
                    : "blog_post" }>

            <Link to={path}>
                {(isFeaturedPost) ? ( 
                    <div className={"blog_post__featured_image_container featuredImageContainer"}>
                        <FeaturedImage isFeature={true} featuredImage={featured_media} />
                        <MetaCard postData={postData} />
                    </div>
                    ) : ( 
                    <>
                        <FeaturedImage featuredImage={featured_media} />
                        <div className={(type === 'callout') ? "blog_post__callout--blog_post" : null}>
                            <h4 className={"blog_post__callout--heading"}>{ReactHtmlParser(title)}</h4>
                            <div className={"blog_post__callout--excerpt"}>{ReactHtmlParser(excerpt)}</div>
                        </div>
                        <BlogMeta type={type} metaData={metaProps}/>
                    </> 
                )}
            </Link>

        </div>
    )

}

export default BlogPost