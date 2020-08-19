import React from "react"

import "./addFields.scss"

const AddFields = () => (
        <div id="addFields">
            <div className="input-container">
                <label className="form-label" htmlFor="phone">Phone
                    <input type="tel" name="phone" aria-label="phone" />
                </label>
                <label className="form-label" htmlFor="website">Website
                    <input type="url" name="website" aria-label="website" />
                </label>
            </div>
            <div id="checkbox" className="input-container">
                <fieldset name="services-wanted">
                    <legend>Services interested in:</legend>
                    <div className="checkbox-container">
                        <div className="checkbox-input-container">
                            <label htmlFor="ros">Online Ordering Software
                                <input type="checkbox" id="ros" name="ros" aria-label="online-ordering-system" value="ros" /><span></span>
                            </label>
                        </div>
                        <div className="checkbox-input-container">
                            <label htmlFor="consulting">Consulting
                                <input type="checkbox" id="consulting" name="consulting" aria-label="consulting" value="web-consulting" /><span></span>
                            </label>
                        </div>
                        <div className="checkbox-input-container">
                            <label htmlFor="development">Web Dev/Design
                                <input type="checkbox" id="development" name="development" aria-label="development" value="web-dev-design" /><span></span>
                            </label>
                        </div>
                        <div className="checkbox-input-container">
                            <label htmlFor="wordpress" >WordPress
                                <input type="checkbox" id="wordpress" name="wordpress" aria-label="wordpress" value="wordpress" /><span></span>
                            </label>
                        </div>
                        <div className="checkbox-input-container">
                            <label htmlFor="maintenance" >Web Maintenance
                                <input type="checkbox" id="maintenance" name="maintenance" aria-label="maintenance" value="web-maintenance" /><span></span>
                            </label>
                        </div>
                        <div className="checkbox-input-container">
                            <label htmlFor="seo">SEO
                                <input type="checkbox" id="seo" name="seo" aria-label="seo" value="seo" /><span></span>
                            </label>
                        </div>
                        <div className="checkbox-input-container">
                            <label htmlFor="marketing" aria-label="marketing">Digital Marketing
                                <input type="checkbox" id="marketing" name="marketing" aria-label="marketing" value="marketing" /><span></span>
                            </label>
                        </div>
                    </div>
                </fieldset>
                
            </div>
        </div>
)

export default AddFields