import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/blog/blog.scss"

import Layout from "../components/layout"
import PageBanner from "../components/hero/pageBanner"
import SEO from "../components/seo"

import peakLogoWhite from "../images/logo/Logo_white.svg"
import tinyClock from "../images/illustrations/svg/clock_icon.svg"

export default ({ data, location }) => {

    const { allWordpressPost: posts } = data
 
    return (
        <Layout className="blog" page="blog">
            <SEO title="" description="" />

            <PageBanner pageTitle="blog" />

            <article className="blog-content-container">
                <div className="blog-heading">
                    <h5>Featured Blog Articles</h5>
                    <span className="barline"></span>
                </div>
            </article>

            <section className="blog-content-container">
                <div className="blog-heading">
                    <h5>Latest Blog Articles</h5>
                    <span className="barline"></span>
                </div>
                <div className="blog-inner-container">
                {data.allWordpressPost.edges.map(({ node }) => (
                    <div key={node.title} className="blog-post">
                        <Link to={node.slug}>
                            {  
                            /* test for featured media */
                            node.featured_media != null ? 
                            <Img className="featured-image" fluid={node.featured_media.localFile.childImageSharp.fluid} /> 
                            : <img className="featured-image" src={peakLogoWhite} alt="" />
                            }
                            <h4 dangerouslySetInnerHTML={{ __html: node.title }} />
                            {truncateExcerpt(node.excerpt)}
                        </Link>
                        <div className="post-meta-data">
                            <p>{getAuthor(node.categories, node.author.name)}</p>
                            <p className="date">
                                <img className="clock-icon" src={tinyClock} alt="last updated date"/>
                                <span>{getDate(node.modified, node.date)}</span>
                            </p>
                        </div>
                        {/* {showCategories(node)} */}
                    </div>
                ))}  
                </div>
            </section>
            
        </Layout>
    )
 }

export const queryAllPosts = graphql`
    query {
        allWordpressPost(limit: 6, sort: {fields: date, order: DESC}, 
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

/**
 * Query fragment for querying featured images
 */
export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

/**
 * Adds an ellipsis to blocks of text of 100 characters
 * @param {String} excerpt a string of content
 */
function truncateExcerpt(excerpt) {
    const contentMax = 100
    if (excerpt.length > contentMax) {
        return <p dangerouslySetInnerHTML={{ __html: `${excerpt.substring(0, contentMax)}...`}} />
    } else {
        return <p dangerouslySetInnerHTML={{ __html: excerpt}} />
    }
}

/**
 * Get the last updated date
 * fallback to publishing date
 * @param {String} modDate last modified date
 * @param {String} pubDate publishing date
 */
function getDate(modDate, pubDate) {
    // if modDate exists, return that
    // else return pubDate    
    if (modDate) return modDate;
    return pubDate;

}

/**
 * Check if post has the category 'Guest Post'
 * @param {categories} categories the categories for a post
 * @param {author} author the (default) author of the post
 */
function getAuthor(categories, author) {
    return (categories.some(category => 
        category.name === 'Guest Post')) 
    ? 'Guest Post' :  author
}

/**
 * Function to check for existence of post categories and output formatting string
 * @param {Object} node the post object
 * @returns {Str} html string 
 */
function showCategories(node) {

    if (node.categories.length) {
        let catsStr = '<span>'

        for (let index = 0; index < node.categories.length; index++) {
            if ( index === node.categories.length-1) {
                catsStr += node.categories[index].name
                continue
            }
            catsStr += node.categories[index].name + ', '
        }
        catsStr += '</span>'

    return <p dangerouslySetInnerHTML={{ __html: catsStr}}></p>
    }

}

