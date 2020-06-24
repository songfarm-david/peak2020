import React from "react"

import AddFields from "./additionalFields"
import "./mainContactForm.scss"

/**
 * Main Contact Form
 * Optional extension via prop value
 * 
 * @param {*} param0.isAddFields boolean value 
 */
const MainContactForm = ({ path, isAddFields }) => {
        
    return (
        <form name={( isAddFields ) ? "main-contact-form-full" : "main-contact-form"} 
            action={path +"?thank_you"} method="post" 
            className={( isAddFields ) ? "mainContact plusAddFields" : "mainContact"}
            data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value={( isAddFields ) ? "main-contact-form-full" : "main-contact-form"} aria-label="hidden" />
            <div className="input-container">
                <label className="form-label" htmlFor="name">Name
                    <input type="input" name="name" aria-label="name" />
                </label>
                <label className="form-label" htmlFor="email">Email
                    <input type="email" name="email" aria-label="email" required />
                </label>
            </div>
            {( isAddFields && <AddFields /> ) }
            <label className="form-label">How Can We Help?
                <textarea rows="14" name="comment" aria-label="comment"></textarea>
            </label>
            <button className="button primary-button">Send</button>
        </form> 
    )

}

export default MainContactForm