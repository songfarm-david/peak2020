import React, { useState, useEffect } from "react"

import RotatingText from "./rotatingText.js"
import "./heroSection.scss"
import heroSlideStyles from "../../styles/globals/colors.scss";

const HeroBanner = () => {
    
    const [activeWord, setActiveWord] = useState({
        current: 0,
        last: undefined
    });

    const words = [
        {
            word: "digital marketing",
            color: "#6BE8AA",
        }, {
            word: "development",
            color: "#DEC1FF",
        }, {
            word: "design",
            color: "#E5AD3E",
        }, {
            word: "SEO",
            color: "#49C5DE",
        }, {
            word: "consulting",
            color: "#66BA86",
        }, {
            word: "webmaster services",
            color: "#27688E",
        }
    ];

    useEffect(() => {
        
        let isActive = true
        let timer

        if ( isActive ) {
            timer = setTimeout(() => {
                const last = activeWord.current;
                const current = last === words.length - 1
                    ? 0
                    : last + 1;
                setActiveWord({
                    current,
                    last
                })
            }, 4000);
        }
        /* clean up timer on unmount */
        return () => clearTimeout(timer) 

    }, [activeWord, words]);

    return (
        <div className="hero-banner">
            <div className="hero-text-container heading-1">
                <p>Do you need reliable, creative, experienced website <br/>
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