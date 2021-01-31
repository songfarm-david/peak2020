import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import S from 'string'
import HeroSection from "../components/hero/heroSection"
import PageContent from "../components/layout/pageContent"
import TestimonialsCarousel from "../components/hero/testimonials"
import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/forms/contactFormCallout"

/**
 * Index page
 * 
 * Jan 31, 2021
 */
export default ({ data, location }) => {

    const { title, type, content, excerpt, path, slug } = data.wordpressPage

    return (
        <Layout>
            <SEO title={title} description={excerpt} path={path} />
            <Helmet title={S(title).decodeHTMLEntities().s} />
            <HeroSection />
            <PageContent>
                <div className={'flex_container'} dangerouslySetInnerHTML={{ __html: content }} />
            </PageContent>
            <TestimonialsCarousel />
            <BlogCallout />
            <Newsletter path={location.pathname} />
            <ContactFormCallout path={location.pathname} isAddFields={false} />
        </Layout>
    )

}

/**
 * Query Index page
 */
export const queryPage = graphql`
    query indexPage {
        wordpressPage(wordpress_id: {eq: 1735}) {
            title
            content
            type
            path
            slug
            excerpt
        }
        site {
            siteMetadata {
                title
                siteUrl
                keywords
                contactEmail
                telephone
                author
                image
            }
        }
    }
`