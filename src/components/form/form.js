import React from "react"

import AddFields from "./additionalFields"
import "./form.scss"

const Form = ({ isAddFields }) => (
    <form id="contactForm" className={( isAddFields ) ? "plusAddFields" : null}>
        <div className="input-container">
            <label className="form-label" htmlFor="name">Name
                <input type="input" name="name" />
            </label>
            <label className="form-label" htmlFor="email">Email
                <input type="email" name="email" required />
            </label>
        </div>
        {( isAddFields && <AddFields /> ) }
        <label className="form-label">How Can We Help?
            <textarea rows="14"></textarea>
        </label>
        <button className="button primary-button">Send</button>
    </form> 
)

export default Form