import React from "react"

import "./contactForm.scss"
import MainContactForm from "../form/mainContactForm"

const ContactForm = ({ heading, paragraph, isAddFields }) => (
    <div id="contactFormContainer">
        <article>
            <h2 className="screen-reader-text">Contact Us</h2>
            <div className="contact-form-text">
                <p className="heading heading-2">{( heading ) ? heading : "Elevate Your Business"}</p>
                <p className="sub-heading">{( paragraph ) ? paragraph : "Let us help lead your business to new heights."}</p>
                <MainContactForm isAddFields={isAddFields} />
            </div>
        </article>
    </div>
)

export default ContactForm