/**
 * Blog template
 * Mar 2020
 */

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
    
   console.log(data)

    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <h3>Total blog count:</h3>
            <p>{data.allWordpressPost.totalCount}</p>
            <div style={{ maxWidth: `80vw`, marginBottom: `1.45rem` }}>
            {data.allWordpressPost.edges.map(({ node }) => (
                <div key={node.id} style={{ marginBottom: `1.45rem` }}>
                <h4>{node.title}</h4>
                <p className="blog-post-date">{node.date}</p>
                <p>{node.excerpt}</p>
                <a href={node.slug}>Read more</a>
                </div>
            ))}
            <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    )
}

export const query = graphql`
  query MyQuery {
    allWordpressPost {
      totalCount
      edges {
        node {
          id
          title
          date
          excerpt
          slug
          wordpress_id
        }
      }
    }
  }
`