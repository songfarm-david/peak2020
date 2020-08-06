import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BlogHeading from "./blog-components/blogHeading"
import BlogPost from "./blog-components/blogPost"
import "../../styles/blog/posts.scss"

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

    // return (
    //     <section className={`${blogStyles.blogSectionContainer} ${blogStyles.blogCallout}`}>
    //         <div className={blogStyles.calloutContainer}>
    //             <BlogHeading headingText="Latest Blog Articles" className="callout"/>
    //             <div className={blogStyles.blogInner}>
                
    //                 {featuredPosts.edges.map(({ node }, idx) => (
    //                 <BlogPost key={idx} postData={node} type="callout"/> ))}  
    
    //                 <div className={blogStyles.calloutBtn}>
    //                     <Link to="/blog/" className="button primary-button">Go to blog</Link>
    //                 </div>
                    
    //             </div>
    //         </div>
            
    //     </section>
    // )

    return (
        <section id="blogCallout" className={"blogSectionContainer blogCallout"}>
            <div className={"calloutContainer"}>
                <BlogHeading headingText="Latest Blog Articles" className="callout"/>
                <div className={"blogInner"}>
                    {featuredPosts.edges.map(({ node }, idx) => (
                        <BlogPost key={idx} postData={node} type="callout"/> ))}  
    
                        <div className={"calloutBtn"}>
                            <Link to="/blog/" className="button primary-button">Go to blog</Link>
                        </div>
                </div>
            </div>

        </section>
    )

}

export default BlogCallout