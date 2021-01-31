import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import ServiceCard from "../components/layout/services/serviceCard"

import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/forms/contactFormCallout"

import "../styles/pages.scss"

import SEO from "../components/seo"
import Helmet from "react-helmet"
import S from 'string'

/**
 * Services Page
 */
export default ({ data, location }) => {

    const { wordpressPage, allWordpressPage: allServices } = data
    const { title, path, type, excerpt, slug } = wordpressPage
    
    return (
        <Layout path={path} layoutClass={title}>
            <SEO title={title} description={excerpt} path={location.href} />
            <Helmet title={S(title).decodeHTMLEntities().s} />
            <PageBanner bannerType={type} title={title} slug={slug} />
            <PageContent path={slug} type={slug}>
                <div className={`flex_container`}>
                    {allServices.edges.map((service, idx) => (
                        <ServiceCard key={idx} service={service.node} />
                    ))}
                </div>
            </PageContent>
            <BlogCallout />
            <Newsletter path={path} />
            <ContactFormCallout path={path} />  
        </Layout>
    )
}

/**
 * Query for both a sticky post (to test in the component), as well as
 * querying all posts (filtering out sticky posts)
 */
export const queryAllPosts = graphql`
    query MyQuery {
        wordpressPage (wordpress_id: {eq: 2517}) {
            title
            type
            path
            slug
            excerpt
        }
        allWordpressPage(filter: {parent_element: {wordpress_id: {eq: 2517}}}) {
            edges {
                node {
                    title
                    excerpt
                    slug
                    path
                    featured_media {
                        localFile {
                            childImageSharp {
                                fluid(maxHeight: 210) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }              
                }
            }
        }
    }
`