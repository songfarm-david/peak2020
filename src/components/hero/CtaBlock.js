import React from "react"

import "./CtaBlock.scss"

const scheduleDemoLink = 'https://calendly.com/restolabs/restolabs-demonstration?utm_source=peak_websites'
const demoLink = 'https://orders.krcatering.com/#/onlineorder'

const CtaBlock = ({ title = null, byline = null }) => (
    <div className={"section_container cta_block"}>
        <article className={"section_content section_container__inner "}>
            <div className={"cta_block__inner"}>
                {(title !== null) ? <p className={"heading-2 cta_block__heading"}>{title}</p> : null}
                {(byline !== null) ? <p className={"heading-3 cta_block__byline"}>{byline}</p> : null}
                {/* <p>Set up is fast and can be done in an hour. There are no contracts and you can cancel anytime.</p> */}
                <a href={scheduleDemoLink} className={"cta_block__button button primary-button"}>Schedule a Time to Start</a> <a href={demoLink} target="_blank" className={"cta_block__button button primary-button"}>View Demo App</a>
            </div>
        </article>
    </div>
)

export default CtaBlock