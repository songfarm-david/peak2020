import React from "react"

import "./quotesCarousel.scss"

const QuotesCarousel = () => {

    const quotes = [
        {
            quote: "It is up to us to allow the obstacles in our live to be the excuse for our failure... or the reason behind our success.",
            author: 'Unknown'
        }
    ]

    return (
        <div id="quoteCarousel" className="footer-item">
            <div className="inner-container">
                <div className="quote-container">
                    {
                        quotes.map( qts => (
                            <>
                            <p className="quote">{qts.quote}</p>
                            <p className="author">{qts.author}</p>
                            </>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default QuotesCarousel