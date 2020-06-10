import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactHtmlParser from 'react-html-parser';

import peakLogoWhite from "../../images/logo/Logo_white.svg"
import tinyClock from "../../images/illustrations/svg/Clock_icon-blue.svg"

import {truncateExcerpt, getAuthor, getDate} from "../../functions/helperFunctions"
import BlogHeading from "./blog-components/blogHeadings"

/**
 * Returns an index of all blog posts
 * 
 * @param {Obj} param0 Object containing (limit of 6) blog posts
 */
const AllPosts =({allPosts}) => {

    return (
        <section className="blog-content-container">
            
            <BlogHeading headingText="Latest Blog Articles" />
            
            <div className="blog-inner-container">
                {allPosts.edges.map(({ node }) => (
                    <div key={node.title} className="blog-post">

                        <Link to={node.path}>{  
                            node.featured_media != null ? 
                            <Img className="featured-image" fluid={node.featured_media.localFile.childImageSharp.fluid} /> 
                            : <img className="featured-image" src={peakLogoWhite} alt="" />}
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