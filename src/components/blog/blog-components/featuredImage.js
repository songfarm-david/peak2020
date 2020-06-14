import React from "react"
import Img from "gatsby-image"
import peakLogoWhite from "../../../images/logo/Logo_white.svg"

import featuredImageStyles from "./featuredImage.module.scss"

const FeaturedImage = (props) => { 

    const { featuredImage, isFeature = false } = props || {}
    
    return ((featuredImage) ? 
        <Img className={(isFeature) ? 
            `${featuredImageStyles.featuredImage} ${featuredImageStyles.featuredFull}` : featuredImageStyles.featuredImage} 
            fluid={featuredImage.localFile.childImageSharp.fluid} 
            /> : 
        <img className={featuredImageStyles.featuredImage} src={peakLogoWhite} 
            alt={(featuredImage && featuredImage.alt_text) ? featuredImage.alt_text : ""} 
            />
    )

}

export default FeaturedImage