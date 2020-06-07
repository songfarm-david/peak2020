import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/hero/pageBanner"
import FeaturedPost from "../components/blog/featuredPost"
import AllPosts from "../components/blog/allPosts"
import Newsletter from "../components/hero/newsletter"
import ContactForm from "../components/layout/contactForm"

import "../styles/blog/blog.scss"

/**
 * This is the component for the blog index page
 * 
 */
export default ({ data }) => {
    
    const stickyPost = data.featuredPost
    const allPosts = data.allWordpressPost
    
    /**
     * Validate presence of value for Sticky Post
     * 
     * @param {Arr} stickyPost a sticky post in an array
     */
    const haveStickyPost = ( stickyPost ) => (typeof stickyPost === undefined) ? false : stickyPost

    return (
        <Layout specialClass="blog">
            
            <PageBanner pageTitle="blog" bannerType="page" props={''} />

            { /* check if there is a 'sticky' post in the CMS */
                ( haveStickyPost( stickyPost ) && <FeaturedPost sticky={stickyPost} /> )
            }      

            <AllPosts 
                allPosts={allPosts} />   

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
    query {
        featuredPost: wordpressPost(sticky: {eq: true}) {
            id
            title
            slug
            path
            excerpt
            content
            featured_media {
                localFile {
                ...squareImage
                }
            }
            categories {
                name
            }
            author {
                name
            }
            date(formatString: "MMM Do, YYYY")
            modified(formatString: "MMM Do, YYYY")
        }
        allWordpressPost(limit: 6, sort: {fields: date, order: DESC}, 
            filter: {categories: {elemMatch: {name: {ne: "Portfolio"}}}, sticky: {eq: false}}) {
            totalCount
            edges {
                node {
                    wordpress_id
                    title
                    slug
                    status
                    date(formatString: "MMM Do, YYYY")
                    modified(formatString: "MMM Do, YYYY")
                    path
                    type
                    excerpt
                    content
                    categories {
                        name
                    }
                    featured_media {
                        localFile {
                        ...squareImage
                        }
                    }
                    author {
                        name
                    }
                 }
            }
        }
    }
`

/**
 * Query fragment for querying featured images
 */
export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`


