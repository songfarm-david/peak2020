import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout"
import PageBanner from "../components/hero/pageBanner"
import BlogFeature from "../components/blog/blogFeature"
import Newsletter from "../components/hero/newsletter"
import ContactForm from "../components/contactForm"

import "../styles/pages.scss"

/**
 * This is the component for the blog index page
 * 
 */
export default ({ data }) => {
    console.log(data);

    const services = data.allWordpressPage
    
    return (
        <Layout>

            <PageBanner pageTitle="web-services" />

            <div className={"page-content services"}>

              {services.edges.map(({ node }, index) => (
                  <article className="service-card" key={index}>
                      <Img className="service-image" alt={ReactHtmlParser(node.title)} fluid={node.featured_media.localFile.childImageSharp.fluid} style={{maxHeight: '100%', width: '100%'}} imgStyle={{objectFit: 'contain'}} />
                      <h3 className="service-heading">{ReactHtmlParser(node.title)}</h3>
                      <p className="service-excerpt">{ReactHtmlParser(node.excerpt)}</p>
                      <Link className="service-link" to={node.slug} title={ReactHtmlParser(node.title)}>Learn More</Link>
                  </article>
              ))}

            </div>

            <BlogFeature />
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
    allWordpressPage(filter: {parent_element: {slug: {eq: "services"}}}) {
        edges {
          node {
            title
            excerpt
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxHeight: 210) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            slug
          }
        }
      }
  }
`