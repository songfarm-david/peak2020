import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import ContactForm from "../components/form/contactFormCallout"

import "../styles/pages.scss"

import SEO from "../components/seo"
import Helmet from "react-helmet"
import S from 'string'

export default ({ data, location }) => {
    console.log('contact us location', location);
    
    const { path, title, type, excerpt, slug } = data.wordpressPage

    return (
        <Layout path={path} layoutClass={title}>

            <SEO 
                title={title} 
                description={excerpt} 
                path={location.href} />

            <Helmet title={S(title).decodeHTMLEntities().s} />

            <PageBanner bannerType="page" title={title} slug={slug} />

            <PageContent path={slug} type={type}>

                <ContactForm 
                    heading="Begin the Journey" 
                    paragraph="Take the first step today and let us know what problem you’re trying to solve. We’d love to hear from you and would be happy to help!" 
                    formPath={path} isAddFields={true} />

            </PageContent>

        </Layout>
    )

}

/**
 * Query contact page
 */
export const queryPage = graphql`
    query contactPage {
        wordpressPage(wordpress_id: {eq: 1722}) {
            title
            type
            path
            slug
            excerpt
        }
    }
`