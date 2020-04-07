import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/globals.scss"
import "../styles/layout.scss"

export default ({ data, location }) => {
    
    const { wordpressPage: page } = data
 
    return (
        <Layout page={location  && location.pathname === "/" ? true : false}>
            <SEO title={page.title} description={page.excerpt} />
            <h1 className="screen-reader-text">{page.title}</h1>
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
        allSitePage {
            edges {
              node {
                path
              }
            }
        }
    }
`

