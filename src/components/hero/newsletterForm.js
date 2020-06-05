import React, { useState } from "react"
import axios from 'axios'

const NewsletterForm = ({ text }) => {

    const [userEmail, setState] = useState({'email_address': ''})

    const handleChange = e => {
        setState({email_address: e.target.value})        
    }

    const submitSubscribe = async e => {
        e.preventDefault()

        const {
            MC_DATA_NO,
            MC_AUDIENCE_ID,
            MC_API_KEY
        } = process.env

        const credentials = 'anystring:'+ MC_API_KEY
        let url = 'https://'+ MC_DATA_NO +'.api.mailchimp.com/3.0'
        url += '/lists/'+ MC_AUDIENCE_ID +'/members'
        
        const payload = {
            'email_address': userEmail.email_address,
            'status': 'subscribed'
        }

        
        try {
            const response = await axios.post( url, payload, {
                headers: {
                    'Authorization': 'Basic ' + Buffer.from(credentials).toString('base64')
                }
            })
            console.log('r', response)
            console.log('r data', response.data)
          } catch(err) {
            console.log(err);
            
          }
        

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