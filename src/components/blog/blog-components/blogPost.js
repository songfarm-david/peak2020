import React from "react"
import { Link } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import FeatureBlogCard from "./featureBlogCard"
import FeaturedImage from "./featuredImage"
import BlogMeta from "./blogMeta"

import blogPostStyles from "./blogPost.module.scss"

const BlogPost = ({ type, postData, isFeaturedPost = false }) => {
    console.log('BlogPost type, postData, isFeaturedPost', type, postData, isFeaturedPost);

    const { path, title, excerpt, featured_media, ...metaProps } = postData

    return (
        <div className={
            (isFeaturedPost) ? `${blogPostStyles.blogPost} ${blogPostStyles.featuredPost}` : blogPostStyles.blogPost}>

            <Link to={path}>
            {
                ( isFeaturedPost ) ? (
                    <div className={blogPostStyles.featuredImageContainer}>
                        <FeaturedImage isFeature={true} featuredImage={featured_media} />
                        <FeatureBlogCard postData={postData} />
                    </div>
                ) 
                : 
                ( <>
                    <FeaturedImage featuredImage={featured_media} />
                    <div className={(type && type === 'callout') ? blogPostStyles.callout : null}>
                        <h4 className={blogPostStyles.heading}>{ReactHtmlParser(title)}</h4>
                        <div className={blogPostStyles.excerpt}>{ReactHtmlParser(excerpt)}</div>
                    </div>
                    <BlogMeta type={type} metaData={metaProps}/>
                </> )}
            </Link>
        </div>
    )

}

export default BlogPost