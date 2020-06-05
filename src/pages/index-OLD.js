import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/globals.scss"
import "../styles/pages.scss"

export default ({ data, location }) => {
    
    const {content} = data.wordpressPage
    
    return (
        <Layout page="index">
            {<div className="page-content home">
                {ReactHtmlParser(content)}
            </div>}
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

