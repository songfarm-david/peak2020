import React from "react"
import Img from "gatsby-image"
import peakLogoWhite from "../../../images/logo/Logo_white.svg"

import featuredImageStyles from "./featuredImage.module.scss"

const FeaturedImage = ({ featuredImage, isFeature = false, isPageFeature = false }) => (    
    (featuredImage) ? 
        <Img fluid={featuredImage.localFile.childImageSharp.fluid}
            className={(isFeature) ? 
            `${featuredImageStyles.featuredImage} ${featuredImageStyles.featuredFull}` 
            : (isPageFeature) ? 
            `${featuredImageStyles.featuredImage} ${featuredImageStyles.pageFeature}`
            : featuredImageStyles.featuredImage} /> 
        : <img className={featuredImageStyles.featuredImage} src={peakLogoWhite} 
            alt={(featuredImage && featuredImage.alt_text) ? featuredImage.alt_text : ""} 
            />
    )

export default FeaturedImage