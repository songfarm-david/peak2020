import React from "react"

const demoLink = 'https://app1.restolabs.com/en/onlineorder/RestolabsDemo1#/onlineorder'

const BenefitsBlock = () => (
    <div className={"section_container section_container--aside section_container--grey"} id="benefits">
        <section className={"section_content section_container__inner section_container__inner--aside"}>
            <aside className={"section_aside"}>
                <h3 className={"section_aside__header"}>Key Benefits</h3>
                <ul className={"section_aside__list"}>
                    <li>Save on 3rd-party commissions</li>
                    <li>Designed for YOUR business</li>
                    <li>Learn about your customers and provide better value</li>
                </ul>
            </aside>
            
            <div id="#tryDemo" className={"section_content--main_content section_container--grey"}>
                <h2>Try the App:</h2>
                <p>Give the Online Ordering App a try on desktop or mobile!</p>
                <a href={demoLink} target="_blank" className={"cta_block__button button primary-button"} style={{marginTop: '1rem'}}>Try Demo Restaurant</a>
            </div>
            
        </section>
        
    </div>
)

export default BenefitsBlock