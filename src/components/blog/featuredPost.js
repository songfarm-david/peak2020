import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import peakLogoWhite from "../../images/logo/Logo_white.svg"

import "../../styles/blog/blogIndex.scss"
import "./featuredPost.scss"

import FeatureBlogCard from "./blog-components/featureBlogCard"
import BlogHeading from "./blog-components/blogHeading"

const FeaturedPost = (props) => {
    
    const {
        path,
        featured_media
    } = props.sticky
    
    return (
        <article className="blog-content-container">

            <BlogHeading headingText="Featured Blog Articles" />

            <div className="blog-inner-container">
                <div className="featured-post blog-post">
                    <Link to={path}>
                        <div className="featured-image">
                            {featured_media != null ? 
                            <Img className="featured-image" fluid={featured_media.localFile.childImageSharp.fluid} /> : 
                            <img className="featured-image" src={peakLogoWhite} alt="" />}
                        </div>
                        <FeatureBlogCard props={props.sticky} />
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedPost