import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"

import FeaturedPost from "../components/blog/featuredPost"
import AllPosts from "../components/blog/allPosts"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import SEO from "../components/seo"
import Helmet from "react-helmet"
import S from 'string'

/**
 * Blog Index page
 */
export default ({ data, location }) => {
    
    const { wordpressPage, allWordpressPost, featuredPost } = data
    const { title, type, path, slug, excerpt } = wordpressPage
    
    /**
     * Validate presence of value for Sticky Post
     * 
     * @param {Arr} featuredPost a sticky post in an array
     */
    const haveStickyPost = ( featuredPost ) => (typeof featuredPost !== undefined) ? true : false
    
    return (
        <Layout path={path} layoutClass={"blog-index"}>

            <SEO title={title} description={excerpt} path={location.href} />
            <Helmet title={S(title).decodeHTMLEntities().s} />
            
            <PageBanner bannerType={type} title={title} slug={slug} />

            <PageContent path={slug} type={type}>
                {(haveStickyPost(featuredPost) && <FeaturedPost postData={featuredPost} /> )}      
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
            slug
            excerpt
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
                path
            }
            author 
            date(formatString: "MMM Do, YYYY")
            modified(formatString: "MMM Do, YYYY")
        }
        allWordpressPost(sort: {fields: date, order: DESC}, 
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
                    sticky
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
                    author 
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
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`


