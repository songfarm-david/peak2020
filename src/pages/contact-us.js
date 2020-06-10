import React from "react"

import Layout from "../components/layout/layout"
import PageBanner from "../components/hero/pageBanner"
import ContactForm from "../components/layout/contactForm"

import "../styles/pages.scss"

export default ({ data }) => {

    const pageProps = data.wordpressPage

    const h = "Begin the Journey"
    const p = "Take the first step today and let us know what problem you’re trying to solve. We’d love to hear from you and would be happy to help!"

    return (
        <Layout specialClass="contact-us">

            <PageBanner bannerType="page" props={pageProps} />

            {/* <div className="page-content contact-us"> */}
                <ContactForm heading={h} paragraph={p} isAddFields={true} />
            {/* </div> */}

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