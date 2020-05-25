import React from "react"

import "./newsletter.scss"

const Newsletter = () => (
    <section id="newsletter">
        <div className="inner-container">
            <div className="heading">
                <h2>Want to know what's happening online?</h2>
            </div>
            <div className="newsletter">
                <input type="email" placeholder="Required field"/>
                <button className="button primary-button">Send</button>
            </div>
            <div className="sub-heading">
                <p>Get thoughtful, informative web and tech ideas you can put to use.</p>
            </div>
        </div>
    </section>
)

export default Newsletter