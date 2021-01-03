import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby" // to query for image data

// import "./mainContactForm.scss"
import "../../styles/globals.scss"

// import newsletterBgImg from "../../images/newsletter-min.jpeg"

const LeadGenSEO = ({title = '', byline = '', sidebar = false}) => {
    
    const bgImg = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "newsletter-min.jpeg" }) {
                childImageSharp {
                    fluid {
                        base64
                        aspectRatio
                        src
                        srcSet
                        sizes
                    }
                }
            }
        }
    `)

    return (
        <article className={`section_container ${(!sidebar) ? 'section_container--background' : ''}`}>
            {!sidebar && <div className={"bg_img_container"}><Img fluid={bgImg.file.childImageSharp.fluid} /></div>}
            <div className={"section_content"}>
                <div className={`contact_form lead_gen_form ${(sidebar) ? 'lead_gen_form__sidebar' : ''}`}>
                    <h2 className={`${sidebar ? 'heading-3' : 'text_shadow'}`}>{title}</h2>
                    <p className={`${sidebar ? '' : 'hidden'}`}>{byline}</p>
                    <form name={"lead_gen_SEO"} method={"post"} data-netlify={true} data-netlify-honeypot={"bot-field"} className={(!sidebar) ? 'full_width' : ''}>
                        <input type="hidden" name="form-name" value={"lead_gen_SEO"} aria-label="hidden" />
                        <div className={"input_container"}>
                            <label className={"form_label"} htmlFor={"name"} aria-label={"name"}>Name <span className={"required_field"}>*</span>
                                <input type="input" name="name" aria-label="name" required />
                            </label>
                            <label className="form_label" htmlFor="email">Email <span className={"required_field"}>*</span>
                                <input type="email" name="email" aria-label="email" required />
                            </label>
                            <label className="form_label" htmlFor="phone">Phone <span className={"required_field"}>*</span>
                                <input type="tel" name="phone" aria-label="phone" required />
                            </label>
                            <label className="form_label" htmlFor="website">Website
                                <input type="url" name="website" aria-label="website" />
                            </label>
                            <button className={`button ${sidebar ? 'primary-button' : 'primary-button-inverted'}`}>Get Report!</button>
                        </div>
                    </form>
                </div>
            </div>
        </article>
    )
}

export default LeadGenSEO