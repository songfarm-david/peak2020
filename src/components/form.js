import React from "react"

import "./form.scss"

const Form = () => (
    <form id="contactForm" className="contact-form">
        <label className="form-label">Name
            <input type="input" />
        </label>
        <label className="form-label">Email
            <input type="email" required />
        </label>
        <label className="form-label">How Can We Help?
            <textarea rows="14"></textarea>
        </label>
        <button className="button primary-button">Send</button>
    </form> 
)

export default Form