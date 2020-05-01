import React, { useState, useEffect } from "react"

import {SlottedLetters} from "./slottedLetters.js"
import "../../styles/hero.scss"

const Banner = (props) => {
    
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
                <p>Do you need reliable, creative, experienced website&nbsp;
                    <br />
                    <span id="rotatingWord">
                        {words.map(({ word, color }, idx) => (
                            <span key={`word-${idx}`} className="word" style={{ color }}>
                                <SlottedLetters 
                                    active={idx === activeWord.current}
                                    wasActive={idx === activeWord.last}
                                    word={`${word}?`}
                                />
                            </span>
                        ))}
                    </span>
                </p>
            </div>
        </div>
    )

}

export default Banner