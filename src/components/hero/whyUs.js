/**
 * Why Us Section
 * Dec 30, 2020
 */
import React from "react"
import "./whyUs.scss"

const WhyUs = () => {

    const points = [
        {
            title: "More Focus on our Clients",
            description: "Because Peak Websites is a smaller agency, we work with only a small handful of clients. That means we can provide a more focused and responsive service to our clients. Our quick service and fast response times is something clients appreciate.",
        },
        {
            title: "Pay Less, No Agency Pricing",
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
                    <h3>Why Us?</h3>
                    <div className={"flex_container"}>
                        {points.map(({title, description}, idx) => (
                            <div className={"flex_child"} key={idx}>
                                <i className="align_center">Icon</i>
                                <p className="heading-4">{title}</p>
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