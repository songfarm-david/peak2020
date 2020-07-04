import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import RotatingText from "./rotatingText.js"
import "./heroSection.scss"
import { getActiveClass } from "../../functions/helperFunctions"

import heroImageMobile from "../../images/homepage_mobile.png"
import heroImageDesktop from "../../images/homepage.jpeg"

const HeroBanner = () => {

    let activeImage = (getActiveClass() === 'mobile') ? heroImageMobile : heroImageDesktop

    const data = useStaticQuery(graphql`
        query {
            heroImageMobile: file(relativePath: { eq: "homepage_mobile.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            heroImageDesktop: file(relativePath: { eq: "homepage.jpeg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

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
            color: "#E5AD3E",
        }, {
            word: "design",
            color: "#DEC1FF",
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
            <Img id="heroBannerImage" className={(getActiveClass() === 'mobile') ? "hero-image hero-image-mobile" : "hero-image hero-image-desktop"} fluid={(getActiveClass() === 'mobile') ? data.heroImageMobile.childImageSharp.fluid : data.heroImageDesktop.childImageSharp.fluid} />
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
                <Link to="/services/" title="View Services" className="button secondary-button">View Services</Link>
            </div>
        </div>
    )

}

export default HeroBanner