import React from "react"
import { Link } from "gatsby"

import ReactHtmlParser from 'react-html-parser';
import { truncateExcerpt } from "../../../functions/helperFunctions"

import blogPostStyles from "./blogPost.module.scss"

import FeatureBlogCard from "./featureBlogCard"
import FeaturedImage from "./featuredImage"
import BlogMeta from "./blogMeta"

const BlogPost = ({ postData, isFeaturedPost = false, type = null }) => {
    // console.log('blogPost.js', postData, 'isFeaturedPost?', isFeaturedPost);
    
    const { 
        path, 
        title,
        author,
        featured_media, 
        excerpt, 
        date, 
        modified, 
        categories,
        sticky } = postData.featuredPost || postData
    
    return (
        <div className={( !sticky ) ? blogPostStyles.blogPost : `${blogPostStyles.blogPost} ${blogPostStyles.featuredPost}`}>
            <Link to={path}>
                {( isFeaturedPost ) ? (
                    <div className={blogPostStyles.featuredImageContainer}>
                        <FeaturedImage isFeature={true} featuredImage={featured_media} />
                        <FeatureBlogCard props={postData} />
                    </div>
                ) : (
                    <>
                        <FeaturedImage featuredImage={featured_media} />
                        <div className={(type && type === 'callout') ? blogPostStyles.callout : null}>
                            <h4 className={blogPostStyles.heading}>{ReactHtmlParser(title)}</h4>
                            <p className={blogPostStyles.excerpt}>{truncateExcerpt(excerpt)}</p>
                        </div>
                        <BlogMeta type={type} metaData={{author, date, modified, categories}}/>
                    </>
                )}
            </Link>
        </div>
    )

}

export default BlogPost