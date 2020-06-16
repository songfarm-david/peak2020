import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"

import FeaturedPost from "../components/blog/featuredPost"
import AllPosts from "../components/blog/allPosts"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

/**
 * Blog Index page
 */
export default ({ data }) => {

    const { wordpressPage, allWordpressPost, featuredPost } = data
    const { title, type, path } = wordpressPage
    
    /**
     * Validate presence of value for Sticky Post
     * 
     * @param {Arr} featuredPost a sticky post in an array
     */
    const haveStickyPost = ( featuredPost ) => (typeof featuredPost !== undefined) ? true : false
    
    return (
        <Layout path={path} layoutClass={title}>
            <PageBanner bannerType={type} title={title} />
            <PageContent path={path}>
                {( haveStickyPost(featuredPost) && <FeaturedPost postData={featuredPost} /> )}      
                <AllPosts allPosts={allWordpressPost} />   
            </PageContent>
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
    query {
        wordpressPage(wordpress_id: {eq: 703}) {
            title
            type
            path
        }
        featuredPost: wordpressPost(sticky: {eq: true}) {
            id
            title
            slug
            path
            excerpt
            content
            sticky
            featured_media {
                alt_text
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


