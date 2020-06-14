import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"

import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import "../styles/pages.scss"

/**
 * Services Page
 */
export default ({ data, location }) => {

    const { pathname: path } = location 
    
    const { title } = data.wordpressPage
    const services = data.allWordpressPage

    return (
        <Layout layoutClass="services-home">

            <PageBanner bannerType="page" title={title} />

            <PageContent path={title} type="services">
                {services}
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
        wordpressPage(wordpress_id: {eq: 2517}) {
            title
        }
        allWordpressPage(filter: {parent_element: {slug: {eq: "services"}}}) {
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