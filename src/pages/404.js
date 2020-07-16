import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import "../styles/pages.scss"

export default ({location}) => {
    return (
        <Layout layoutClass="page-404">
            <div>
                <p className="heading heading-1">404</p>
                <p className="sub-heading heading-2">Oh no, it seems like you are lost! Get back on trail with us.</p>
                <Link to="/" className="button secondary-button">Go home</Link>
            </div>
            {/* <Newsletter path={location.pathname} />
            <ContactFormCallout path={location.pathname} isAddFields={false} /> */}
        </Layout>
    )
}


