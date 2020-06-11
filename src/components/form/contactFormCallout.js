import React from "react"

import "./contactFormCallout.scss"
import MainContactForm from "./mainContactForm"

const ContactForm = ({ 
    heading = "Elevate Your Business", 
    paragraph = "Let us help lead your business to new heights.", 
    isAddFields = false, 
    path = "/" 
}) => (
    <div id="contactFormContainer">
        <article>
            <h2 className="screen-reader-text">Contact Us</h2>
            <div className="contact-form-text">
                <p className="heading heading-2">{ heading }</p>
                <p className="sub-heading">{ paragraph }</p>
                <MainContactForm 
                    path={ path } 
                    isAddFields={ isAddFields } />
            </div>
        </article>
    </div>
)

export default ContactForm