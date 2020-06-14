import React from "react"
import { Link } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import blogPostStyles from "./blogPost.module.scss"

import FeatureBlogCard from "./featureBlogCard"
import FeaturedImage from "./featuredImage"
import BlogMeta from "./blogMeta"

const BlogPost = (props) => {

    const { isFeaturedPost, featuredPost, postData, type } = props || {}

    const { 
        path,
        title,
        author,
        featured_media, 
        excerpt, 
        date, 
        modified, 
        categories,
        sticky } = featuredPost || postData.featuredPost || postData || {}
         
    return (
        <div className={( !sticky ) ? 
            blogPostStyles.blogPost : `${blogPostStyles.blogPost} ${blogPostStyles.featuredPost}`}>
            <Link to={path}>
                {( isFeaturedPost ) ? (
                    <div className={blogPostStyles.featuredImageContainer}>
                        <FeaturedImage isFeature={true} featuredImage={featured_media} />
                        <FeatureBlogCard postData={(featuredPost || postData.featuredPost)} />
                    </div>
                ) : (
                    <>
                        <FeaturedImage featuredImage={featured_media} />
                        <div className={(type && type === 'callout') ? blogPostStyles.callout : null}>
                            <h4 className={blogPostStyles.heading}>{ReactHtmlParser(title)}</h4>
                            <div className={blogPostStyles.excerpt}>{ReactHtmlParser(excerpt)}</div>
                        </div>
                        <BlogMeta type={type} metaData={{author, date, modified, categories}}/>
                    </>
                )}
            </Link>
        </div>
    )

}

export default BlogPost