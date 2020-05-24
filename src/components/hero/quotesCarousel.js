import React from "react"

import "./quotesCarousel.scss"

const QuotesCarousel = () => {

    const [quotes] = [
        'It is up to us to allow the obstacles in our live to be the excuse for our failure... or the reason behind our success.',
        'You are Mickey Mouse'
    ]

    return (
        <div id="quoteCarousel" className="footer-item">
            <div className="inner-container">
                <p className="heroQuote">{quotes}</p>
            </div>
        </div>
    )
}

export default QuotesCarousel