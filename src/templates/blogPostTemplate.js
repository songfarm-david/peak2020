import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout/layout"
import PageBanner from "../components/hero/pageBanner"
import Newsletter from "../components/hero/newsletter"
import ContactForm from "../components/layout/contactForm"

import "../styles/blog/blogPosts.scss"

/**
* Blog template
* Mar 2020
*/
export default ( props ) => {
    console.log('blogTemplate page props', props);
    
    return (
        <Layout specialClass="blog">
            
            <PageBanner bannerType="blog" props={props} />
        
            <div className={"page-content blog-post"}>
                {ReactHtmlParser(props.pageContext.content)}
            </div>
        
            {/* display other blogs most likely to be attractive to user */}
            <Newsletter />
            <ContactForm isAddFields={false} />
      
        </Layout>
    )
    
}

export const query = graphql`
    query($postId: Int!) {
        wordpressPost(wordpress_id: {eq: $postId}) {
            title
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