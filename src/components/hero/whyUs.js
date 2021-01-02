/**
 * Why Us Section
 * Dec 30, 2020
 */
import React from "react"
import "./whyUs.scss"

import { whyUs } from "../../data/why-us"

import checkMark from "../../images/check-mark-box-gold.svg"

const WhyUs = () => {

    return (
        <div id="whyUs" className={"section_container"}>
            
            <div className={"section_content"}>
                <article>
                    <h2 className="align_center">Why work with Peak Websites?</h2>
                    <div className={"flex_container"}>
                        {whyUs.map(({title, description}, idx) => (
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