import React from "react"
import { getActiveClass } from "../../functions/helperFunctions"

import * as importData from "../../data/testimonials.js"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// console.log(importData);
import "./testimonials.scss"

const TestimonialsCarousel = () => {
    
    return ( 
        <section id="testimonials" role="region" aria-label="Testimonials" className={"section_container"}>
            <div className={"slideContainer section_content"} >
                <Carousel autoPlay infiniteLoop interval={7000}>
                    {importData.testimonials
                    .filter((t) => t.visible) // test if testimonial is set to visible
                    .map((testimonial, i) => (
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

export default TestimonialsCarousel