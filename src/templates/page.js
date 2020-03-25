/**
 * Page template
 * Mar 2020
 */

 import React from "react"
 import { graphql } from "gatsby"
 import Layout from "../components/layout"

export default ({ data }) => {
    
   console.log(data)
   
    const {title, content} = data.wordpressPage

    // const page = data.node
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query( $wp_id: Int! ) {
        wordpressPage(wordpress_id: {eq: $wp_id}) {
            wordpress_id
            slug
            status
            title
            excerpt
            content
        }
    }
`