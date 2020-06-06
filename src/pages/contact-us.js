import React from "react"

import Layout from "../components/layout/layout"
import PageBanner from "../components/hero/pageBanner"
import ContactForm from "../components/layout/contactForm"

import "../styles/pages.scss"

export default ({ data }) => {

    const h = "Begin the Journey"
    const p = "Take the first step today and let us know what problem you’re trying to solve. We’d love to hear from you and would be happy to help!"

    return (
        <Layout specialClass="contact-us">

            <PageBanner pageTitle="Contact" />

            <div className="page-content contact-us">
                <ContactForm heading={h} paragraph={p} />
            </div>

        </Layout>
    )

}