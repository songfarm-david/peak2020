import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import ServiceCard from "../components/layout/services/serviceCard"

import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import "../styles/pages.scss"

/**
 * Services Page
 */
export default ({ data }) => {

    const { wordpressPage, allWordpressPage: allServices } = data
    const { title, path, type } = wordpressPage
    
    console.log('services.js allServices', allServices);
    
    
    return (
        <Layout path={path} layoutClass={title}>
            <PageBanner bannerType={type} title={title} />
            <PageContent path={path} type={type}>
                {allServices.edges.map((service, idx) => (
                    <ServiceCard key={idx} service={service.node} />
                ))}
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
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }              
                }
            }
        }
    }
`