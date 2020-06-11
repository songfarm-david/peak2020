import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/hero/pageBanner"
import FeaturedPost from "../components/blog/featuredPost"
import AllPosts from "../components/blog/allPosts"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

/**
 * Blog Index page
 * Composes a blog index page with a variable sticky post
 * 
 * NOTE: status of sticky post is controlled in CMS!!
 * 
 * @param {Obj} data.featuredPost status of sticky 
 */
export default ({ data, location }) => {

    const { featuredPost: stickyPost, allWordpressPost: allPosts } = data,
    title = data.wordpressPage.title, {pathname: path} = location
    
    /**
     * Validate presence of value for Sticky Post
     * 
     * @param {Arr} stickyPost a sticky post in an array
     */
    const haveStickyPost = ( stickyPost ) => (typeof stickyPost === undefined) ? false : stickyPost

    return (
        <Layout specialClass="blog">
        
            <PageBanner bannerType="page" title={title} />

            {( haveStickyPost( stickyPost ) && <FeaturedPost sticky={stickyPost} /> )}      

            <AllPosts allPosts={allPosts} />   

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


