import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import S from 'string'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

/**
* Blog template
* Mar 2020
*/
export default ({ data, location, pageContext }) => {
    console.log('blogTemplate data, location, pageContext', data, location, pageContext);

    /* create proptypes and stream a var declaration format that is clearer 
        the difference between page templates and blog templates is that blog posts must inlude a 'featured_media' property to be passed into the PageBanner component
    */

    const { 
        title, 
        type, 
        featured_media, 
        excerpt, 
        content, 
        ...metaProps 
    } = data.wordpressPost
    
    return (
        <Layout path={location.pathname} layoutClass={"blog-post " + title}> 
            
            <SEO title={title} description={excerpt} image={featured_media} path={location.href}
            />

            <Helmet title={S(title).decodeHTMLEntities().s} />

            <PageBanner bannerType={type} title={title} bannerImg={featured_media} bannerData={(type === 'post') ? {metaProps, title} : null} />
            
            <PageContent type={type} content={content} />

            <Newsletter path={location.pathname} />
            <ContactFormCallout path={location.pathname} isAddFields={false} />

        </Layout>
    )
    
}

export const query = graphql`
    query($id: String!) {
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
    }    
`