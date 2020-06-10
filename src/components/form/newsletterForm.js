import React, { useState } from "react"

import { getRelPath } from "../../functions/helperFunctions"

const NewsletterForm = ({ text }) => {
    
    const [userEmail, setState] = useState({'email_address': ''})

    const handleChange = e => {
        setState({email_address: e.target.value})        
    }    

    return (
        <form name="newsletter-signup" action={getRelPath()+"?thank_you"} method="post" 
            data-netlify="true" data-netlify-honeypot="bot-field" 
            style={{ width: '100%'}}>
            <input type="hidden" name="form-name" value="newsletter-signup" />
            <input type="email" name="email_address" placeholder="Email address" onChange={handleChange} value={userEmail.email_address} required />
            <button type="submit" className="button primary-button-inverted">{(text) ? text : 'Send'}</button>
        </form>
    )
}

export default NewsletterForm