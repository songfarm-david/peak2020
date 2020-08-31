import React from "react"
import { getActiveClass } from "../../functions/helperFunctions"

import * as importData from "../../data/testimonials.js"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

console.log(importData);

const TestimonialsToo = () => {
    
    return ( 
        <section id="testimonials" role="region" aria-label="Testimonials">
            <div className={"slideContainer slider-"} >
                <Carousel autoPlay>
                    {importData.testimonials.map((testimonial, i) => (
                        <blockquote key={i}>
                                <span className="heading heading-4">{testimonial.headline}</span>
                                <span className="body">{testimonial.body}</span>
                                <footer>
                                    <cite className="cite">{testimonial.author}</cite>
                                    <a href={testimonial.cite} target="_blank">{(testimonial.business) ? testimonial.business : testimonial.cite}</a>
                                </footer>
                            </blockquote>
                    ))}
                </Carousel>
                
            </div>
        </section>
    )

}

export default TestimonialsToo