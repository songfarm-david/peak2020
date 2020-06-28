import React from "react"

import arrowRight from "../../images/illustrations/svg/Arrows/arrow_right.svg"
import arrowLeft from "../../images/illustrations/svg/Arrows/arrow_left.svg"

import testiesStyles from "./testimonials.module.scss"
import * as allTestimonials from "../../quotes/testimonials.js"

const Testimonials = () => {

    const { testimonials } = allTestimonials
    
    return (

        <section className={testiesStyles.testies}>
            <h2>Testimonials</h2>
            <div className={testiesStyles.slidersContainer}>
                <ul>{testimonials.map((t, idx) => (
                    <li className={testiesStyles.slide} key={idx} index={idx}>
                        <blockquote>
                            <span className={`${testiesStyles.heading} heading-3`}>{t.headline}</span>
                            <span className={testiesStyles.body}>{t.body}</span>
                            <footer className={testiesStyles.testiFooter}>
                                <cite className={testiesStyles.cite}>{t.author}</cite>
                                <a href={t.cite}>{t.cite}</a>
                            </footer>
                        </blockquote>
                    </li>))}
                </ul>
                <button className={`${testiesStyles.buttons} ${testiesStyles.buttonLeft}`}><img src={arrowLeft} /></button>
                <button className={`${testiesStyles.buttons} ${testiesStyles.buttonRight}`}><img src={arrowRight} /></button>
            </div>
        </section>
            
    )

}

export default Testimonials