import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {

    const { allWordpressPost: posts } = data
 
    console.log(posts)

    return (
        <Layout>
            <SEO title="" description="" />
            {data.allWordpressPost.edges.map(({ node }) => (
                <div key={node.title}>
                    <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
                    <p>{node.date}</p>
                    {
                        node.featured_media != null ? <Img fluid={node.featured_media.localFile.childImageSharp.fluid} /> : "/"
                    }
                    
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <Link to={node.slug}>Read more</Link>
                    {showCategories(node)}
                </div>
            ))}
        </Layout>
    )
 }

/**
 * Exclude 'Portfolio' category from request
 */
export const queryAllPosts = graphql`
    query {
        allWordpressPost(sort: {fields: date, order: DESC}, 
            filter: {categories: {elemMatch: {name: {ne: "Portfolio"}}}}) {
            totalCount
            edges {
                node {
                    wordpress_id
                    date(formatString: "MMMM Do, YYYY")
                    title
                    slug
                    status
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

