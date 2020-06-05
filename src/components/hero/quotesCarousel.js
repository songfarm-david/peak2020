import React, { useState, useEffect } from "react"
import {quotes} from "../../quotes/quotes"
import "./quotesCarousel.scss"

const QuotesCarousel = () => {    

    const randomQuote = (quotes) => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        return quotes[randomNumber];
    }

    const selectedQuote = randomQuote(quotes)

    return (
        <div id="quoteCarousel" className="footer-item">
            <div className="inner-container">
                <div className="quote-container">
                    <p className="quote">{selectedQuote.quote}</p>
                    <p className="author">{selectedQuote.author}</p>
                </div>
            </div>
        </div>
    )
}

export default QuotesCarousel