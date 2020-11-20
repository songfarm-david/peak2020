import React from "react"

import "./keyFacts.scss";

const facts = [
    {
        factHeading: '300%',
        factBody: 'Digital ordering has outgrown dine-in traffic'
    }, {
        factHeading: '63%',
        factBody: 'Consumers agree its more convenient to order takeout/delivery'
    }, {
        factHeading: '>50%',
        factBody: 'Consumers prefer to order directly from restaurant website'
    }
]

const Facts = () => (
    <div className={"section_container section_container--white"}>
        <section className={"section_content section_content--blockquote section_container__inner "} id="facts">
            <h2 className={"features_container__header screen-reader-text"}>Key Facts</h2>
            <blockquote className={"theme_blockquote"}>
                {facts.map(({ factHeading, factBody }, idx) => (
                    <div key={idx} className={"fact_container"}>
                        <p className={"fact_heading heading-2"}>{factHeading}</p>
                        <p className={"fact_body big-body-text"}>{factBody}</p>
                    </div>
                ))}
            </blockquote>
            
        </section>
    </div>
)

export default Facts