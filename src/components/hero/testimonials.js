import React, { useState, useEffect } from "react"
import { getActiveClass } from "../../functions/helperFunctions"
// aria considerations: https://www.w3.org/TR/wai-aria-practices/#carousel
// https://www.w3.org/TR/wai-aria-practices/examples/carousel/carousel-1.html
import arrowRight from "../../images/illustrations/svg/Arrows/arrow_right.svg"
import arrowLeft from "../../images/illustrations/svg/Arrows/arrow_left.svg"

import * as importData from "../../data/testimonials.js"
import "./testimonials.scss"

const Testimonials = () => {

    /**
     * Splits up an array into chunks by a given chuck 'size' value 
     * 
     * @param {Array} arr an array to split up
     * @param {Int} size an integer to split the array by
     */
    const chunkArray = ( arr, size = 3 ) => {
        if ( size < 1 ) throw new Error('Size must be positive') // prevent negative loop    
        let chunkedTestimonials = []
        return arr.reduce( ( acc, _, i ) => {
            return chunkedTestimonials = (i % size) ? acc : [...acc, arr.slice(i, i + size)]
        }, [])
    }

    const [viewportClass, setViewportClass] = useState(getActiveClass());
    const [allTestimonials, setAllTestimonials] = useState({
        activeSlide: 0,
        data: (viewportClass === "mobile") ? importData.testimonials : chunkArray(importData.testimonials)
    })
    
    /**
     * 
     */
    useEffect(() => {
        if (typeof window !== 'object') return false;
        const handleResize = () => {
            setViewportClass(getActiveClass()) 
            setAllTestimonials((prevState) => {
                return ({ 
                    activeSlide: (prevState.activeSlide !== prevState.activeSlide) ? 0 : prevState.activeSlide, 
                    data: (viewportClass === "mobile") ? importData.testimonials : chunkArray(importData.testimonials)
                })
            })}
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [viewportClass, allTestimonials])

    /**
     * Goes back one index point (testimonial)
     */
    const cycleBack = () => { 
        if (allTestimonials.activeSlide === 0) return
        setAllTestimonials((prevState) => ({...prevState, activeSlide: allTestimonials.activeSlide - 1}))
    }

    /**
     * Goes forward one index point (testimonial)
     */
    const cycleForward = () => { 
        if (allTestimonials.activeSlide === allTestimonials.data.length-1) return 
        setAllTestimonials((prevState) => ({...prevState, activeSlide: allTestimonials.activeSlide + 1}))
    }

    /**
     * 
     */
    const ListHTML = ({mode, testimonials}) => {
        let html = ``
        switch (mode) {
            case 'mobile':
                html = (
                    allTestimonials.data.map(( testimonial, idx ) => (
                        <li key={idx} role="slide"
                            className={(idx === allTestimonials.activeSlide) ? "slide" : "slide hidden"}
                            tabIndex={(idx === allTestimonials.activeSlide) ? "0" : "-1"} 
                            aria-hidden={(idx === allTestimonials.activeSlide) ? false : true}>
                            <blockquote>
                                <span className="heading heading-3">{testimonial.headline}</span>
                                <span className="body">{testimonial.body}</span>
                                <footer>
                                    <cite className="cite">{testimonial.author}</cite>
                                    <a href={testimonial.cite}>{(testimonial.business) ? testimonial.business : testimonial.cite}</a>
                                </footer>
                            </blockquote>
                        </li>
                    ))
                )
                break;
            case 'desktop':
                html = (
                    allTestimonials.data.map(( testimonial, idx ) => (
                        testimonial.map((t, i) => (
                            <li key={i} 
                                className={(idx === allTestimonials.activeSlide) ? "slide" : "slide hidden"}
                                tabIndex={(idx === allTestimonials.activeSlide) ? "0" : "-1"} 
                                aria-hidden={(idx === allTestimonials.activeSlide) ? false : true}>
                                <blockquote>
                                    <span className="heading heading-3">{t.headline}</span>
                                    <span className="body">{t.body}</span>
                                    <footer>
                                        <cite className="cite">{t.author}</cite>
                                        <a href={t.cite}>{(t.business) ? t.business : t.cite}</a>
                                    </footer>
                                </blockquote>
                            </li>   
                        ))
                    ))
                )
                break;
            default:
                break;
        }
        return html
    }
    
    return ( 
        <section id="testimonials" 
            role="region" 
            aria-label="Testimonials">
            <div className={"slideContainer slider-" + viewportClass} >
                <h2>Testimonials</h2>
                <ul id="testimonials-slider" aria-live="off" aria-live="polite">
                    {<ListHTML role="group" aria-roledescription="slide" mode={viewportClass} testimonials={allTestimonials} />}
                </ul>
                <fieldset aria-label="testimonials controls" aria-controls="testimonials-slider">
                    <button 
                        className="buttons buttonLeft" 
                        aria-label="previous testimonial" 
                        aria-controls="testimonials"
                        onClick={cycleBack} 
                        onKeyPress={cycleBack}>
                        <img src={arrowLeft} alt={"Arrow left - previous testimonial"} />
                    </button>
                    <button 
                        className="buttons buttonRight" 
                        aria-label="next testimonial"
                        aria-controls="testimonials"
                        onClick={cycleForward} 
                        onKeyPress={cycleForward}>
                        <img src={arrowRight} alt={"Arrow right - next testimonial"} />
                    </button>
                </fieldset>
            </div>
        </section>
    )

}

export default Testimonials