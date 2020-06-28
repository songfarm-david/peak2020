import React from "react"

import arrowRight from "../../images/illustrations/svg/Arrows/arrow_right.svg"
import arrowLeft from "../../images/illustrations/svg/Arrows/arrow_left.svg"

import "../../styles/theme-styles/testimonials.scss"
import * as allTestimonials from "../../quotes/testimonials.js"

const Testimonials = () => {

    const { testimonials } = allTestimonials
    
    return (

        <section>
            <h2>Testimonials</h2>
            <div className="slideContainer">
                <ul>{testimonials.map((t, idx) => (
                    <li className="slide" key={idx} index={idx} tabIndex="0" >
                        <blockquote>
                            <span className="heading heading-3">{t.headline}</span>
                            <span className="body">{t.body}</span>
                            <footer>
                                <cite className="cite">{t.author}</cite>
                                <a href={t.cite}>{t.cite}</a>
                            </footer>
                        </blockquote>
                    </li>))}
                </ul>
                <button className="buttons buttonLeft"><img src={arrowLeft} /></button>
                <button className="buttons buttonRight"><img src={arrowRight} /></button>
            </div>
        </section>
            
    )

}

export default Testimonials