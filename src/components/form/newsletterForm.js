import React, { useState } from "react"

import newsletterFormStyles from "./newsletterForm.module.scss"

const NewsletterForm = ({ path, text }) => {
    
    const [userEmail, setState] = useState({'email_address': ''})

    const handleChange = e => {
        setState({email_address: e.target.value})        
    }    

    return (
        <form id={newsletterFormStyles.mainForm} 
            name="newsletter-signup" 
            method="post" 
            action={path +"?thank_you"}>

            <input className={newsletterFormStyles.input} type="email" name="email_address" placeholder="Email Address" onChange={handleChange} value={userEmail.email_address} required />

            <button type="submit" className={`${newsletterFormStyles.input}`+ 
                " button primary-button-inverted"}>{
                (text) ? text : 'Send' 
            }</button>

        </form>
    )
}

export default NewsletterForm