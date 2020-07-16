import React from "react"
import {quotes} from "../../data/quotes"

import quotesStyles from "./quotesCarousel.module.scss"

const QuotesCarousel = () => {    

    const randomQuote = (quotes) => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        return quotes[randomNumber];
    }

    const selectedQuote = randomQuote(quotes)

    return (
        <div id={quotesStyles.quoteCarousel}>
            <div className={quotesStyles.innerContainer}>
                {/* <div className="quote-container"> */}
                    <p className={quotesStyles.quote}>"{selectedQuote.quote}"</p>
                    <p className={quotesStyles.author}>{selectedQuote.author}</p>
                {/* </div> */}
            </div>
        </div>
    )
}

export default QuotesCarousel