import React, { useState } from "react"
import axios from 'axios'

const NewsletterForm = ({ text }) => {

    const [userEmail, setState] = useState({'email_address': ''})
    
    const {
        GATSBY_MC_DATA_NO,
        GATSBY_MC_AUDIENCE_ID,
        GATSBY_MC_API_KEY
    } = process.env

    const credentials = 'anystring:'+ GATSBY_MC_API_KEY
    let url = 'https://'+ GATSBY_MC_DATA_NO +'.api.mailchimp.com/3.0'
    url += '/lists/'+ GATSBY_MC_AUDIENCE_ID +'/members'

    const handleChange = e => {
        setState({email_address: e.target.value})        
    }

    const submitSubscribe = async e => {
        e.preventDefault()

        const payload = {
            'email_address': userEmail.email_address,
            'status': 'subscribed'
        }

        try {
            console.log('what\'s the url?', url);
            
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