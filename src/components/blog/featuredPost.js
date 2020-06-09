import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import peakLogoWhite from "../../images/logo/Logo_white.svg"

import "./featuredPost.scss"

import FeatureBlogCard from "./featureBlogCard"

const FeaturedPost = (props) => {
    console.log('sticky in featuredPost', props);
    
    const {
        path,
        featured_media
    } = props.sticky
    
    return (
        <article className="blog-content-container">
            <div className="blog-heading">
                <p className="heading-5">Featured Blog Articles</p>
                <span className="barline"></span>
            </div>
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