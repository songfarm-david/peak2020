import React, { useState } from "react"

import newsletterFormStyles from "./newsletterForm.module.scss"

const NewsletterForm = ({ path, text, className = {} }) => {
        
    const [userEmail, setUserEmail] = useState({'email_address': ''})

    const handleChange = e => {
        setUserEmail({email_address: e.target.value})        
    }    

    return (
        <form id={newsletterFormStyles.mainForm} 
            className={(className === "footerNewsletter") ? newsletterFormStyles.footerNewsletter : null}
            name="newsletter-signup" 
            method="post" 
            action={path +"?thank_you"}>

            <input type="email" name="email_address" aria-label="email" placeholder="Email Address" onChange={handleChange} value={userEmail.email_address} required />

            <button type="submit" className="button primary-button-inverted">{
                (text) ? text : 'Send' 
            }</button>

        </form>
    )
}

export default NewsletterForm