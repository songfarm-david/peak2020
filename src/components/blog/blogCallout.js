import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {truncateExcerpt, getAuthor, getDate} from "../../functions/helperFunctions"

import peakLogoWhite from "../../images/logo/Logo_white.svg"
import tinyClock from "../../images/illustrations/svg/clock_icon.svg"

import "./blogCallout.scss"

/**
 * Blog section on home page: features 3 latest blogs
 * 
 */
const BlogFeature = ({ data }) => {

    const query = useStaticQuery(
        graphql`
            query {
                allWordpressPost(limit: 3, sort: {fields: date, order: DESC}, 
                    filter: {categories: {elemMatch: {name: {ne: "Portfolio"}}}}) {
                    totalCount
                    edges {
                        node {
                            wordpress_id
                            title
                            slug
                            status
                            date(formatString: "MMM Do, YYYY")
                            modified(formatString: "MMM Do, YYYY")
                            path
                            type
                            excerpt
                            content
                            categories {
                                name
                            }
                            featured_media {
                                localFile {
                                ...squareImage
                                }
                            }
                            author {
                                name
                            }
                        }
                    }
                }
            }
        `
    )
    const featuredPosts = query.allWordpressPost

    return (
        <article id="blogFeature">
            <div className="blog-content-container">
                <div className="blog-heading">
                    <h5>Latest Blog Articles</h5>
                    <span className="barline"></span>
                </div>
                <div className="blog-inner-container">
                {featuredPosts.edges.map(({ node }) => (
                    <div key={node.title} className="blog-post">
                        <Link to={node.path}>
                            {  
                            /* test for featured media */
                            node.featured_media != null ? 
                            <Img className="featured-image" fluid={node.featured_media.localFile.childImageSharp.fluid} /> 
                            : <img className="featured-image" src={peakLogoWhite} alt="" />
                            }
                            <p className="post-heading heading-4" dangerouslySetInnerHTML={{ __html: node.title }} />
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
                <div className="to-blog-link">
                    <Link to="/blog/" className="button primary-button">Go to blog</Link>
                </div>
            </div>
        </article>
    )

}

export default BlogFeature