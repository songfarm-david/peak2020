import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import S from 'string'
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/forms/contactFormCallout"
import LeadGenSEO from "../components/forms/leadGenFormSEO"

import "../styles/pages.scss"
import "../styles/layout.scss"

/**
 * Page template
 * Mar 2020
 */
export default ({ data, location }) => {

    const { 
        title, 
        type,
        excerpt, 
        path,
        content, 
        slug, 
        featured_media, 
        parent_element 
    } = data.wordpressPage

    return (
        <Layout path={location.pathname} layoutClass={(parent_element) ? parent_element.slug+title : title}>
            <SEO title={title} description={excerpt} image={featured_media} path={path} />
            <Helmet title={S(title).decodeHTMLEntities().s} />
            <PageBanner bannerType={type} title={title} slug={slug} />
            <PageContent path={path}>
                <div className={`section_content--inner template__page`}>
                    <div dangerouslySetInnerHTML={{ __html: content }} />  
                    <LeadGenSEO title={"Get a Free Website & SEO Audit"} byline={"Just enter your details and we'll reach out to you within a few days with your report."} sidebar={true} />
                </div>
            </PageContent>
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
                title
                alt_text
                localFile {
                    url
                    childImageSharp {
                        fluid {
                        ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                media_details {
                    height
                    width
                }
            }
        }
    } 
`