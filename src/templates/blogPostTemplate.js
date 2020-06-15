import React from "react"
import PropTypes from 'prop-types';
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
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

    const { title, type, featured_media, content, ...metaProps } = data.wordpressPost
    
    return (
        <Layout path={location.pathname} layoutClass={title}> 

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
            }
            featured_media {
                alt_text
                localFile {
                    childImageSharp {
                        fluid {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }    
`