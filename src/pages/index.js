import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/globals.scss"
import "../styles/pages.scss"

export default ({ data, location }) => {
    
    const { wordpressPage: page } = data
    console.log(data.wordpressPage);

    const {slug, title, excerpt, content} = data.wordpressPage
    
    return (
        <Layout page={slug == 'home' ? "index" : false}>
            <SEO title={title} description={excerpt} />
            {/* <h1 className="screen-reader-text">{page.title}</h1>
            <div dangerouslySetInnerHTML={ {__html: page.content} } ></div> */}
            <h1 className="screen-reader-text">{title}</h1>
            <div className={"page-content " + title.toLowerCase()}>
                {ReactHtmlParser(content)}
            </div>
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

