import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {truncateExcerpt, getAuthor, getDate} from "../../functions/functions"
import ReactHtmlParser from 'react-html-parser';

import peakLogoWhite from "../../images/logo/Logo_white.svg"
import tinyClock from "../../images/illustrations/svg/Clock_icon-blue.svg"

const AllPosts =({allPosts}) => {

    return (
        <section className="blog-content-container">
            <div className="blog-heading">
                <p className="heading-5">Latest Blog Articles</p>
                <span className="barline"></span>
            </div>
            <div className="blog-inner-container">
            {allPosts.edges.map(({ node }) => (
                <div key={node.title} className="blog-post">
                    <Link to={node.slug}>
                        {  
                            node.featured_media != null ? 
                            <Img className="featured-image" fluid={node.featured_media.localFile.childImageSharp.fluid} /> 
                            : <img className="featured-image" src={peakLogoWhite} alt="" />
                        }
                        <h4>{ReactHtmlParser(node.title)}</h4>
                        {truncateExcerpt(node.excerpt)}
                    </Link>
                    <div className="post-meta-data">
                        <p>{getAuthor(node.categories, node.author.name)}</p>
                        <p className="date">
                            <img className="clock-icon" src={tinyClock} alt="last updated date"/>
                            <span>{getDate(node.modified, node.date)}</span>
                        </p>
                    </div>
                </div>
            ))}  
            </div>
        </section>
    )
}

export default AllPosts