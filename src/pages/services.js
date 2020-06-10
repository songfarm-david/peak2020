import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout/layout"
import PageBanner from "../components/hero/pageBanner"
import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/hero/newsletter"
import ContactForm from "../components/layout/contactForm"

import "../styles/pages.scss"

/**
 * Services Page
 */
export default ({ data }) => {

    const pageProps = data.wordpressPage
    const services = data.allWordpressPage

    return (
        <Layout specialClass="services-home">

            <PageBanner bannerType="page" props={pageProps} />

            <div className="page-content web-services">
              {services.edges.map(({ node }, index) => (
                  <article className="service-card" key={index}>
                      <Img className="service-image" alt={node.title} fluid={node.featured_media.localFile.childImageSharp.fluid} style={{maxHeight: '100%', width: '100%'}} imgStyle={{objectFit: 'contain'}} />
                      <h3 className="service-heading">{ReactHtmlParser(node.title)}</h3>
                      <div className="service-excerpt">{ReactHtmlParser(node.excerpt)}</div>
                      <Link className="service-link" to={node.path} title={ReactHtmlParser(node.title)}>Learn More</Link>
                  </article>
              ))}
            </div>

            <BlogCallout />
            <Newsletter />
            <ContactForm />
            
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