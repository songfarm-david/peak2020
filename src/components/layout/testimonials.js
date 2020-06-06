import React from "react"

import "./testimonials.scss"

const TestimonialsCarousel = () => {

    const testimonials = [
        {
            cite: "https://peakwebsites.ca",
            title: "Title 1",
            blurb: 'This is my first blurb',
            author: 'Mustard Seed'
        }, {
            cite: "https://peakwebsites.ca",
            title: "Pizza Hotdog",
            blurb: "mustard ketchup",
            author: 'Mustard Seed'
        }, {
            cite: "https://peakwebsites.ca",
            title: "Troublemaker",
            blurb: "Turd alert alert alert alert alert alert alert, you get the point.",
            author: "turd Ferguson"
        }
    ]

    return (

        <section id="testimonials" className="testimonials">
            <div>
                <h2 className="testimonials-heading">Testimonials</h2>
                <div className="testimonials-container">
                {
                    testimonials.map( (t, i) => (
                        <blockquote key={i} className="testimonial" cite={t.cite}>
                            <p className="heading heading-3">
                                {t.title}
                            </p>
                            <p className="blurb">
                                {t.blurb}
                            </p>
                            <p className="author">{t.author}</p>
                            <p className="link">{t.cite}</p>
                        </blockquote>
                    ))
                }
                </div>
            </div>           
        </section>

    )

}

export default TestimonialsCarousel