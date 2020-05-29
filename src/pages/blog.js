import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {truncateExcerpt, getAuthor, getDate} from "../functions/functions"

import Layout from "../components/layout"
import PageBanner from "../components/hero/pageBanner"
import SEO from "../components/seo"

import peakLogoWhite from "../images/logo/Logo_white.svg"
import tinyClock from "../images/illustrations/svg/clock_icon.svg"

import "../styles/blog/blog.scss"

export default ({ data }) => {

    // const { allWordpressPost: posts } = data
 
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


