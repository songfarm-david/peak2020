import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"

import blogStyles from "../../styles/posts.module.scss"

/**
 * Blog section on home page: features 3 latest blogs
 * 
 */
const BlogFeature = () => {
    
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
        <section className={`${blogStyles.blogSectionContainer} ${blogStyles.blogSectionCallout}`}>
            <BlogHeading headingText="Latest Blog Articles" className="callout"/>
            <div className={blogStyles.blogInner}>
                {featuredPosts.edges.map(({ node }, idx) => (
                    <BlogPost key={idx} postData={node} type="callout"/>
                ))}  
                <div className={blogStyles.calloutBtn}>
                <Link to="/blog/" className="button primary-button">Go to blog</Link>
            </div>
            </div>
            
        </section>
    )

}

export default BlogFeature