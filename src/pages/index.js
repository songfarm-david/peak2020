import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/globals.scss"

export default ({ data, location }) => {
    
    const {content} = data.wordpressPage
    
    return (
        <Layout page={location && location.pathname === "/" ? "index" : false}>
            {ReactHtmlParser(content)}
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

