import React, { useState } from "react"
import axios from 'axios'

const NewsletterForm = ({ text }) => {

    const [userEmail, setState] = useState({'email_address': ''})

    const handleChange = e => {
        setState({email_address: e.target.value})
        console.log('value is', userEmail.email_address);
        
    }

    const submitSubscribe = async e => {
        e.preventDefault()

        const {
            MAILCHIMP_DATA_NO,
            MAILCHIMP_LIST_ID,
            MAILCHIMP_API_KEY
        } = process.env

        const credentials = 'anystring:'+ MAILCHIMP_API_KEY
        let url = 'https://'+ MAILCHIMP_DATA_NO +'.api.mailchimp.com/3.0'
        url += '/lists/'+ MAILCHIMP_LIST_ID +'/members'
        
        const payload = {
            'email_address': userEmail.email_address,
            'status': 'subscribed'
        }

        const response = await axios.post( url, payload, {
            headers: {
                'Authorization': 'Basic ' + Buffer.from(credentials).toString('base64')
            }
        })

        // do something with response
        console.log('r', response)
        console.log('r data', response.data)

    }

    return (
        <form 
            name="newsletter-signup" 
            action="/?thank_you" 
            method="post" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field" 
            style={{ width: '100%'}}
            onSubmit={submitSubscribe}>
            <input type="hidden" name="form-name" value="newsletter-signup" />
            <input type="email" placeholder="Email required" onChange={handleChange} value={userEmail.email_address} required />
            <button type="submit" className="button primary-button-inverted">{(text) ? text : 'Send'}</button>
        </form>
    )
}

export default NewsletterForm