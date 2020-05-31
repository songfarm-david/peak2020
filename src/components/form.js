import React from "react"

import "./form.scss"

const Form = () => (
    <form id="contactForm" className="contact-form">
        <label>Name
            <input type="input" />
        </label>
        <label>Email
            <input type="email" required />
        </label>
        <label>How Can We Help?
            <textarea rows="14"></textarea>
        </label>
        <button className="button primary-button">Send</button>
    </form> 
)

export default Form