import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactHtmlParser from 'react-html-parser';

import { getAuthor, getDate } from "../../functions/helperFunctions"
import peakLogoWhite from "../../images/logo/Logo_white.svg"
import "./featuredPost.scss"

const FeaturedPost =( stickyPost ) => {
    
    const {
        title,
        slug,
        excerpt,
        featured_media,
        categories,
        author,
        date,
        modified
    } = stickyPost.sticky[0].node
    
    return (
        <article className="blog-content-container">
            <div className="blog-heading">
                <p className="heading-5">Featured Blog Articles</p>
                <span className="barline"></span>
            </div>
            <div className="blog-inner-container">
                <div className="featured-post blog-post">
                    <Link to={slug}>
                        <div className="featured-image">
                            {  
                            featured_media != null ? 
                            <Img className="featured-image" fluid={featured_media.localFile.childImageSharp.fluid} /> 
                            : <img className="featured-image" src={peakLogoWhite} alt="" />
                            }
                        </div>
                        <div className="featured-card">
                            <h2 className="heading">{ReactHtmlParser(title)}</h2>
                            <div className="post-meta-data">
                                <div className="date post-meta">
                                    {/* <img className="clock-icon" src={tinyClock} alt="last updated date"/> */}
                                    <span>{getDate(modified, date)}</span>
                                </div>
                                <span className="author post-meta">{getAuthor(categories, author.name)}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedPost