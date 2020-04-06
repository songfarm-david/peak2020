import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
    
    console.log(data)

    const { wordpressPage: page } = data
 
    return (
        <Layout>
            <SEO title={page.title} description={page.excerpt} />
            <p>Do you need reliable, creative, experienced website <span>management</span> to partner with your business?</p>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={ {__html: page.content} } ></div>
        </Layout>
    )
 }

 export const homeQuery = graphql`
    query {
        wordpressPage(wordpress_id: {eq: 1735}) {
            wordpress_id
            slug
            status
            title
            excerpt
            content
        }
    }
`

