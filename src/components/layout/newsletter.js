import React from "react"

import NewsletterForm from "../form/newsletterForm"
import "./newsletter.scss"

const Newsletter = ({ path }) => (
    <section id="newsletter">
        <h2 className="screen-reader-text">Newsletter</h2>
        <div>
            <div className="heading">
                <p className="heading-2">Want to know what's happening online?</p>
            </div>
            <div className="newsletter">
                <NewsletterForm path={path} />
            </div>
            <div className="sub-heading">
                <p>Get thoughtful, informative web and tech ideas you can put to use.</p>
            </div>
        </div>
    </section>
)

export default Newsletter