import React from "react"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout"
import PageBanner from "../components/hero/pageBanner"
import Form from "../components/form"
import SEO from "../components/seo"

export default ({ data }) => {
    
    const {content} = data.wordpressPage

    return (
        <Layout className="contact" page="contact">
            {/* <SEO title="" description="" /> */}
            <PageBanner pageTitle="contact" />
            <div className="page-content contact">
                {ReactHtmlParser(content)}
                <Form />
            </div>
        </Layout>
    )

}

export const homeQuery = graphql`
    query {
        wordpressPage(wordpress_id: {eq: 1722}) {
            wordpress_id
            slug
            status
            title
            excerpt
            content
        }
    }
`