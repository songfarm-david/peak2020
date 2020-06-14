import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

/**
* Blog template
* Mar 2020
*/
export default ( props ) => {
    console.log('blogTemplate props', props);

    const { location, pageContext, data } = props || {}
    
    const { title, content } = pageContext || {}
    const { pathname: path } = location || {} 
    const { featured_media } = data.wordpressPost || {}
    
    console.log('blogtemplate wh\'ats featured media?', featured_media);
    

    return (
        <Layout layoutClass="blog">    
            <PageBanner bannerType="blog" title={title} postData={pageContext} bannerImg={featured_media} />
            
            <PageContent path={title} type="blog" pageData={pageContext} />
                {/* {ReactHtmlParser(content)} */}
            {/* </PageContent> */}
        
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