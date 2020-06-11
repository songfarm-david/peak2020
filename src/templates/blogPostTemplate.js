import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout/layout"
import PageBanner from "../components/hero/pageBanner"
import PageContent from "../components/layout/pageContent"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import "../styles/blog/blogPosts.scss"

/**
* Blog template
* Mar 2020
*/
export default ( props ) => {
    console.log('props from blogPostTemplate', props);

    const {
        title, 
        content
    } = props.pageContext

    const { pathname: path } = props.location 
    console.log('blog post template title', title);
    
    return (
        <Layout specialClass="blog">
            
            <PageBanner bannerType="blog" title={ title } />
            
            <PageContent path={ title }>
                {ReactHtmlParser(content)}
            </PageContent>
        
            {/* display other blogs most likely to be attractive to user */}
            <Newsletter path={path} />
            <ContactFormCallout path={path} isAddFields={false} />
      
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