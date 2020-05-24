import React, { useState, useEffect } from "react"

import RotatingText from "./rotatingText.js"
import "./heroSection.scss"

const HeroBanner = (props) => {
    
    const [activeWord, setActiveWord] = useState({
        current: 0,
        last: undefined
    });

    const words = [
        {
            word: "management",
            color: '#835ea8',
        }, {
            word: "development",
            color: '#4ac5de',
        }, {
            word: "design",
            color: '#58be8b',
        }, {
            word: "SEO",
            color: '#00b4cb',
        }, {
            word: "consulting",
            color: '#49599a',
        }, {
            word: "webmaster services",
            color: '#00af85',
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            const last = activeWord.current;
            const current = last === words.length - 1
                ? 0
                : last + 1;
            setActiveWord({
                current,
                last
            })
        }, 4000);
    }, [activeWord, words]);

    return (
        <div className="hero-banner">
            <div className="hero-text-container">
                <p className="heading-2">Do you need reliable, creative, experienced website <br/>
                    <span id="rotatingWord">
                        {words.map(({ word, color }, idx) => (
                            <span key={`word-${idx}`} className="word" style={{ color }}>
                                <RotatingText 
                                    active={idx === activeWord.current}
                                    wasActive={idx === activeWord.last}
                                    word={`${word}?`}
                                />
                            </span>
                        ))}
                    </span>
                </p>
                <button className="button large secondary-button">Learn More</button>
            </div>
        </div>
    )

}

export default HeroBanner