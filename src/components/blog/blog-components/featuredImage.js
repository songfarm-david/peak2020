import React from "react"
import Img from "gatsby-image"
import peakLogoWhite from "../../../images/logo/Logo_white.svg"

import featuredImageStyles from "./featuredImage.module.scss"

const FeaturedImage = ( { featuredImage, isFeature = false } ) => { 
    // console.log('featuredImage', featuredImage);
    
    // const { featuredImage: featImage } = featuredImage
    
    return ( (featuredImage && featuredImage.localFile) ? 
        <Img className={(!isFeature) ? 
        featuredImageStyles.featuredImage : `${featuredImageStyles.featuredImage} ${featuredImageStyles.featuredFull}`} fluid={featuredImage.localFile.childImageSharp.fluid} /> 
        : 
        <img className={featuredImageStyles.featuredImage} src={peakLogoWhite} alt={ (featuredImage && featuredImage.alt_text) ? featuredImage.alt_text : ""} />
    )
}

export default FeaturedImage