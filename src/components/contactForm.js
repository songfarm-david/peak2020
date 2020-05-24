import React from "react"

import "./contactForm.scss"

const ContactForm = () => (
    <article id="mainContactForm">
        <h2>Elevate Your Business</h2>
        <p>Let us help lead your business to new heights.</p>
        <form>
            <label>Name
                <input type="input" />
            </label>
            <label>Email
                <input type="email" required />
            </label>
            <label>How Can We Help?
                <textarea></textarea>
            </label>
        </form>
    </article>
)

export default ContactForm