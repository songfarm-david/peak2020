import React from "react"

import { getRelPath } from "../../functions/helperFunctions"

import AddFields from "./additionalFields"
import "./mainContactForm.scss"

/**
 * Main Contact Form
 * Optional extension via prop value
 * 
 * @param {*} param0.isAddFields boolean value 
 */
const MainContactForm = ({ isAddFields }) => {
    
    // const parseRelPath = () => {
    //     return getRelPath()+"?thank_you"
    // }
    
    return (
        <form name={( isAddFields ) ? "main-contact-form-full" : "main-contact-form"} 
            action={getRelPath()+"?thank_you"} method="post" 
            className={( isAddFields ) ? "mainContact plusAddFields" : "mainContact"}
            data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" 
                value={( isAddFields ) ? "main-contact-form-full" : "main-contact-form"} />
            <div className="input-container">
                <label className="form-label" htmlFor="name">Name
                    <input type="input" name="name" />
                </label>
                <label className="form-label" htmlFor="email">Email
                    <input type="email" name="email" required />
                </label>
            </div>
            {( isAddFields && <AddFields /> ) }
            <label className="form-label">How Can We Help?
                <textarea rows="14" name="comment"></textarea>
            </label>
            <button className="button primary-button">Send</button>
        </form> 
    )

}

export default MainContactForm