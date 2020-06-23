import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import ContactForm from "../components/form/contactFormCallout"

import "../styles/pages.scss"

export default ({ data }) => {
    // console.log('contact us page', data);
    
    const { path, title, type, slug } = data.wordpressPage

    return (
        <Layout path={path} layoutClass={title}>
            <PageBanner bannerType="page" title={title} />

            <PageContent path={slug} type={type}>
                <ContactForm 
                    heading="Begin the Journey" 
                    paragraph="Take the first step today and let us know what problem you’re trying to solve. We’d love to hear from you and would be happy to help!" 
                    formPath={path} isAddFields={true} 

                    />
            </PageContent>
        </Layout>
    )

}

/**
 * Query contact page
 */
export const queryPage = graphql`
    query contactPage {
        wordpressPage(wordpress_id: {eq: 1722}) {
            title
            type
            path
            slug
        }
    }
`