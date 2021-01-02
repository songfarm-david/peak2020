import React from "react"

import mainContactFormStyles from "./contactFormCallout.module.scss"
import MainContactForm from "./mainContactForm"

const ContactForm = ({ 
    heading = "Elevate Your Business", 
    paragraph = "Let us help lead your business to new heights online.", 
    isAddFields = false, 
    path = "/" 
}) => (
    <div className={"section_container"}>
        <div id={mainContactFormStyles.contactFormContainer}>
            <article>
                <h2 className="screen_reader_text">Contact Us</h2>
                <div className={mainContactFormStyles.contactFormContainer}>
                    <div className={mainContactFormStyles.introContainer}>
                        <p className={mainContactFormStyles.heading}>{heading}</p>
                        <p className={mainContactFormStyles.subHeading}>{ paragraph }</p>
                    </div>
                    <MainContactForm path={path} isAddFields={isAddFields} />
                </div>
            </article>
        </div>
    </div>
)

export default ContactForm