import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import HeroSection from "../components/hero/heroSection"
import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import "../styles/pages.scss"

/**
 * Page template
 * Mar 2020
 */
export default ({ data, location, pageContext }) => {
    console.log('page template data', data, location, pageContext);

    return (
        <Layout path={location.pathname} layoutClass={data.wordpressPage.title}>
            
            {(location.pathname === '/' && <HeroSection />) || 
            <PageBanner bannerType={data.wordpressPage.type} title={data.wordpressPage.title} />}

            <PageContent type={data.wordpressPage.type} content={data.wordpressPage.content} />

            <BlogCallout />
            <Newsletter path={location.pathname} />
            <ContactFormCallout path={location.pathname} isAddFields={false} />
                
        </Layout>
    )

}

export const pageQuery = graphql`
    query($id: String!) {
        wordpressPage(id: { eq: $id}) {
            wordpress_id
            title
            status
            path
            content
            excerpt
            type
            featured_media {
                alt_text
                localFile {
                    childImageSharp {
                        fluid {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    } 
`