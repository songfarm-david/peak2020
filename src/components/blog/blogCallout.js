import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"
// import PageContent from "../components/layout/pageContent"

import "./blogCallout.scss"

/**
 * Blog section on home page: features 3 latest blogs
 * 
 */
const BlogCallout = () => {
    
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
                                alt_text
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
        <section id="blogCallout" className={"callout_section"}>
            <div className={"callout_section__container"}>
                <BlogHeading headingText="Latest Blog Articles" className="callout"/>
                <div className={"callout_section__container--inner"}>
                    {featuredPosts.edges.map(({ node }, idx) => (
                        <BlogPost key={idx} postData={node} type="callout"/> 
                    ))}  
                </div>
                <Link to="/blog/" className="button primary-button">Go to blog</Link>
            </div>
        </section>
    )

}

export default BlogCallout