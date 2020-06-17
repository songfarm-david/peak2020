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
export default ({ data, location }) => {

    const { 
        title, 
        type, 
        content, 
        slug, 
        featured_media, 
        parent_element } = data.wordpressPage
    
    return (
        <Layout path={location.pathname} layoutClass={title}>{
            
            (location.pathname === '/' && <HeroSection />) 
            || <PageBanner bannerType={type} title={title} />}

            <PageContent 
                path={slug} 
                type={(parent_element) ? parent_element.slug : type} 
                content={content} 
                featuredMedia={featured_media} />

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
            slug
            parent_element {
                id
                slug
            }
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