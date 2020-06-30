import React, { useState, useEffect } from "react"

import arrowRight from "../../images/illustrations/svg/Arrows/arrow_right.svg"
import arrowLeft from "../../images/illustrations/svg/Arrows/arrow_left.svg"

import "../../styles/theme-styles/testimonials.scss"
import * as allTestimonials from "../../quotes/testimonials.js"

const Testimonials = () => {

    const { testimonials } = allTestimonials

    const isClient = typeof window === 'object';

    const breakpoint = 769; /* taken from globals.scss mobile breakpoint */

    const getWidth = () => { 
        let width;
        return width = isClient ? window.innerWidth : undefined 
    }

    const getClass = () => {
        if (!isClient) return false
        let compClass;
        return compClass = ( breakpoint > getWidth() ) ? "mobile" : "desktop"
    }

    const [viewportClass, setViewportClass] = useState(getClass());

    useEffect(() => {
        if (!isClient) return false;

        const handleResize = () => setViewportClass(getClass())

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
    
    return (

        <section id="testimonials" role="complementary" aria-live="polite">
            <div className={"slideContainer slider-" + viewportClass} role="slider">
                <h2>Testimonials</h2>
                <ul>{testimonials.map((t, idx) => (
                    <li key={idx} index={idx} 
                        tabIndex="-1" 
                        aria-hidden="false"
                        className="slide">
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
                <button className="buttons buttonLeft" title="previous testimonial"><img src={arrowLeft} /></button>
                <button className="buttons buttonRight" title="next testimonial"><img src={arrowRight} /></button>
            </div>
        </section>
            
    )

}

export default Testimonials