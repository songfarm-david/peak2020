import React from "react"

import "./ctaBlock.scss"

const scheduleDemoLink = 'https://calendly.com/restolabs/restolabs-demonstration?utm_source=peak_websites'

const trialSignUpLink = 'https://davidgaskin.restolabs.com/trial-signup'

const CtaBlock = ({ title = null, byline = null }) => (
    <div className={"section_container cta_block"}>
        <article className={"section_content section_container__inner "}>
            <div className={"cta_block__inner"}>
                {(title !== null) ? <p className={"heading-2 cta_block__heading"}>{title}</p> : null}
                {(byline !== null) ? <p className={"heading-3 cta_block__byline"}>{byline}</p> : null}
                {/* <p>Set up is fast and can be done in an hour. There are no contracts and you can cancel anytime.</p> */}
                <a href={trialSignUpLink} target="_blank" className={"cta_block__button button primary-button"}>Start 30-Days Free Trial</a> <a href={scheduleDemoLink} className={"cta_block__button button primary-button"} target="_blank" >Schedule a Demo</a>
            </div>
        </article>
    </div>
)

export default CtaBlock