/**
 * Blog template
 * Mar 2020
 */

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
    
   console.log(data)

   const { wordpressPost: post } = data

    return (
        <Layout>
            <SEO title={post.title} description={post.excerpt} />
            <div style={{ maxWidth: `80vw`, marginBottom: `1.45rem` }}>
              <div>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <p>{post.date}</p>
              </div>
              <div dangerouslySetInnerHTML={ { __html: post.content }}></div>
            </div>
        </Layout>
    )
}

export const queryBlogPost = graphql`
  query ($wp_id: Int) {
    wordpressPost(wordpress_id: {eq: $wp_id}) {
      title
      date(formatString: "MMMM Do, YYYY")
      excerpt
      content
      slug
      wordpress_id
    }
  }
`