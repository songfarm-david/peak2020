import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import "../styles/pages.scss"

export default () => {
    return (
        <Layout layoutClass="page-404">
            <div>
                <p className="heading heading-1">404</p>
                <p className="sub-heading heading-2">Oh no, it seems like you are lost! Get back on trail with us.</p>
                <Link to="/" className="button secondary-button">Go home</Link>
            </div>
        </Layout>
    )
}


