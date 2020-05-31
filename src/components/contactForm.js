import React from "react"

import "./contactForm.scss"
import Form from "./form"

const ContactForm = () => (
    <article id="mainContactForm">
        <div>
            <p className="heading heading-2">Elevate Your Business</p>
            <p className="sub-heading">Let us help lead your business to new heights.</p>
            <Form />
        </div>
        
    </article>
)

export default ContactForm