import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import ContactForm from "../components/form/contactFormCallout"

import "../styles/pages.scss"

export default ({ data, location }) => {
    console.log('contact us page', data);
    
    const { title } = data.wordpressPage
    const { pathname: path } = location

    return (
        <Layout path={path} specialClass="contact-us">

            <PageBanner bannerType="page" title={title} />

            <PageContent path={title}>
                <ContactForm 
                    heading="Begin the Journey" 
                    paragraph="Take the first step today and let us know what problem you’re trying to solve. We’d love to hear from you and would be happy to help!" 
                    formPath={path} isAddFields={true} />
            </PageContent>

        </Layout>
    )

}

/**
 * Query for both a sticky post (to test in the component), as well as
 * querying all posts (filtering out sticky posts)
 */
export const queryPage = graphql`
    query contactPage {
        wordpressPage(wordpress_id: {eq: 1722}) {
            title
        }
    }
`