import React from "react"
import { Link } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import MetaCard from "./metaCard"
import FeaturedImage from "./featuredImage"
import BlogMeta from "./blogMeta"

// import blogPostStyles from "./blogPost.module.scss"
import "../../../styles/blog/posts.scss"
import "../../../styles/blog/blogPost.scss"

const BlogPost = ({ type, postData, isFeaturedPost = false }) => {
    // console.log('BlogPost type, postData, isFeaturedPost', type, postData, isFeaturedPost);

    const { path, title, excerpt, featured_media, ...metaProps } = postData

    return (
        <div className={(isFeaturedPost) ? "blogPost featuredPost" : "blogPost" }>

            <Link to={path}>
            {
                ( isFeaturedPost ) ? (
                    <div className={"featuredImageContainer"}>
                        <FeaturedImage isFeature={true} featuredImage={featured_media} />
                        <MetaCard postData={postData} />
                    </div> ) 
                : 
                ( <>
                    <FeaturedImage featuredImage={featured_media} />
                    <div className={(type && type === 'callout') ? "callout" : null}>
                        <h4 className={"heading"}>{ReactHtmlParser(title)}</h4>
                        <div className={"excerpt"}>{ReactHtmlParser(excerpt)}</div>
                    </div>
                    <BlogMeta type={type} metaData={metaProps}/>
                </> )}
            </Link>
        </div>
    )

}

export default BlogPost