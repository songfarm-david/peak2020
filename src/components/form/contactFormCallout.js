import React from "react"

import mainContactFormStyles from "./contactFormCallout.module.scss"
import MainContactForm from "./mainContactForm"

const ContactForm = ({ 
    heading = "Elevate Your Business", 
    paragraph = "Let us help lead your business to new heights.", 
    isAddFields = false, 
    path = "/" 
}) => (
    <div id={mainContactFormStyles.contactFormContainer}>
        <article>
            <h2 className="screen-reader-text">Contact Us</h2>
            <div className={mainContactFormStyles.contactFormContainer}>
                <div className={mainContactFormStyles.introContainer}>
                    <p className={mainContactFormStyles.heading}>{heading}</p>
                    <p className={mainContactFormStyles.subHeading}>{ paragraph }</p>
                </div>
                <MainContactForm path={path} isAddFields={isAddFields} />
            </div>
        </article>
    </div>
)

export default ContactForm