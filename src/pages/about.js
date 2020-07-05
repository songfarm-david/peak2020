import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"

import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import SEO from "../components/seo"
import Helmet from "react-helmet"
import S from 'string'

export default ({ data, location }) => {
    
    const { title, type, content, excerpt, path, slug } = data.wordpressPage

    return (
        <Layout path={path} layoutClass={title}>

            <SEO 
                title={title} 
                description={excerpt} 
                path={location.href} />

            <Helmet title={S(title).decodeHTMLEntities().s} />

            <PageBanner bannerType={type} title={title} slug={slug} />
            <PageContent path={slug} type={type} content={content} />
            
            <BlogCallout />
            <Newsletter path={path} />
            <ContactFormCallout path={path} />
            
        </Layout>
    )
}

/**
 * Query about page
 */
export const queryPage = graphql`
    query aboutPage {
        wordpressPage(wordpress_id: {eq: 1718}) {
            title
            content
            type
            path
            slug
            excerpt
        }
    }
`