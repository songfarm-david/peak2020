/**
 * Page template
 * Mar 2020
 */

import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout"
import PageBanner from "../components/hero/pageBanner"

import "../styles/globals.scss"
import "../styles/pages.scss"

export default ({ data, location }) => {
    
    console.log(location.pathname);

    // const {pagePath} = location.pathname
       
    const { title, content } = data.wordpressPage
    
    return (
        <Layout>
            <div className="page-inner">
                
                <PageBanner pageTitle={title.toLowerCase()} />
                {/* <p className="page-excerpt">{ReactHtmlParser(excerpt)}</p> */}
                <div className={"page-content " + title.toLowerCase()}>
                    {ReactHtmlParser(content)}
                </div>
                
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