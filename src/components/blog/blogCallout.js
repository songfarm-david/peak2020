import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

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
        <section id="blogCallout" className={"blog_section"}>
            <BlogHeading headingText="Latest Blog Articles" className="callout"/>
            {featuredPosts.edges.map(({ node }, idx) => (
                <BlogPost key={idx} postData={node} type="callout"/> 
            ))}  
            <Link to="/blog/" className="button primary-button">Go to blog</Link>
        </section>
    )

}

export default BlogCallout