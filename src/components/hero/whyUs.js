/**
 * Why Us Section
 * Dec 30, 2020
 */
import React from "react"
import "./whyUs.scss"

import checkMark from "../../images/check-mark-box-gold.svg"

const WhyUs = () => {

    const points = [
        {
            title: "More Focus on our Clients",
            description: "Peak Websites is a small team of SEOs, Digital Narketers, and Web Designers. Because of that, we can only work with so many clients at one time which means we provide exceptional service and attention to the clients that we do serve. With Peak, you'll have our full attention.. That means we can provide a more focused and responsive service to our clients. Our quick service and fast response times is something clients appreciate.",
        },
        {
            title: "Fairer Pricing",
            description: "Because Peak Websites is a smaller agency, we work with only a small handful of clients. That means we can provide a more focused and responsive service to our clients. Our quick service and fast response times is something clients appreciate.",
        },
        {
            title: "Faster service, More responsive",
            description: "Because Peak Websites is a smaller agency, we work with only a small handful of clients. That means we can provide a more focused and responsive service to our clients. Our quick service and fast response times is something clients appreciate.",
        }
    ]

    return (
        <div id="whyUs" className={"section_container"}>
            
            <div className={"section_content"}>
                <article>
                    <h2 className="align_center">Why work with Peak Websites?</h2>
                    <div className={"flex_container"}>
                        {points.map(({title, description}, idx) => (
                            <div className={"flex_child"} key={idx}>
                                <i className="align_center"><img src={checkMark} /></i>
                                <p className="heading-4 heading">{title}</p>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>
                </article>
            </div>

        </div>
    )
}

export default WhyUs