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
export default ({ data, location }) => (
    <Layout path={location.pathname} layoutClass="services-home">
        <PageBanner bannerType="page" title={"Services"} />
        <PageContent path={location.pathname} type="services" content={data} />
        <BlogCallout />
        <Newsletter path={location.pathname} />
        <ContactFormCallout path={location.pathname} />  
    </Layout>
)

/**
 * Query for both a sticky post (to test in the component), as well as
 * querying all posts (filtering out sticky posts)
 */
export const queryAllPosts = graphql`
    query MyQuery {
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