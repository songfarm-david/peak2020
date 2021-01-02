import React from "react"

import newsletter from "./newsletter.module.scss"
import NewsletterForm from "../form/newsletterForm"

const Newsletter = ({ path }) => (
    <section id={newsletter.newsletter}>
        <h2 className="screen_reader_text">Newsletter</h2>
        <div>
            <div className={newsletter.heading}>
                <p className="heading-2">Want to know what's happening online?</p>
            </div>
            <div className={newsletter.newsletterForm}>
                <NewsletterForm path={path} />
            </div>
            <div className={newsletter.subHeading}>
                <p>Get thoughtful, informative web and tech ideas you can put to use.</p>
            </div>
        </div>
    </section>
)

export default Newsletter