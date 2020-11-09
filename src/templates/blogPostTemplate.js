import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import S from 'string'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import Comments from "../components/comments"
import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import "../styles/posts.scss"


/**
* Blog template
* Mar 2020
*/
export default ({ data, location, pageContext }) => {
    console.log(data, location, pageContext);
    const { 
        wordpress_id,
        path,
        title, 
        type, 
        featured_media, 
        excerpt, 
        content, 
        ...metaProps 
    } = data.wordpressPost

    const { wordpressPost } = data
    const postComments = data.allWordpressWpComments
    
    return (
        <Layout path={location.pathname} layoutClass={"blog_post " + title}> 
            
            <SEO title={title} description={excerpt} image={featured_media} path={location.href}
            />

            <Helmet title={S(title).decodeHTMLEntities().s} />

            <PageBanner bannerType={"post"} bannerData={wordpressPost} title={title} />
            
            <PageContent type={type} content={content} />

            {/* <Comments postData={data} /> */}
            <BlogCallout postId={wordpress_id} />

            <Newsletter path={location.pathname} />
            <ContactFormCallout path={location.pathname} isAddFields={false} />

        </Layout>
    )
    
}

export const query = graphql`
    query($id: String!, $wordpress_id: Int!) {
        wordpressPost(id: {eq: $id}) {
            wordpress_id
            path
            status
            type
            sticky
            title
            excerpt
            date(formatString: "MMM Do, YYYY")
            modified(formatString: "MMM Do, YYYY")
            content
            author {
                name
                wordpress_id
                path
            }
            categories {
                name
                wordpress_id
                path
            }
            featured_media {
                alt_text
                localFile {
                    url
                    childImageSharp {
                        fluid {
                        ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                media_details {
                    height
                    width
                }
            }
        }
        allWordpressWpComments(filter: {post: {eq: $wordpress_id}}) {
            totalCount
            edges {
                node {
                    wordpress_id
                    wordpress_parent
                    type
                    status
                    post
                    path
                    author_name
                    author_url
                    date(formatString: "MMM Do, YYYY")
                    content
                }
            }
        }
    }    
`