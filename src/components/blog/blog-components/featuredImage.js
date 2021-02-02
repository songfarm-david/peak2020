import React from "react"
import Img from "gatsby-image"
import peakLogoWhite from "../../../images/logo/Logo_white.svg"
import "./featuredImage.scss";

const FeaturedImage = ({ featuredImage, isFeature = false, isPageFeature = false, alt, title }) => {

    return (
        (featuredImage) ? 
            <Img fluid={featuredImage.localFile.childImageSharp.fluid}
                className={(isFeature) ? `featuredImage featuredFull` 
                : (isPageFeature) ? `featuredImage pageFeature` 
                : `featuredImage`} 
                alt={(featuredImage.alt_text) ? featuredImage.alt_text : alt ? alt : ""} 
                title={(featuredImage.title) ? featuredImage.title : title ? title : ""} />   
            : <img className={`featuredImage`} src={peakLogoWhite} 
                alt={(featuredImage && featuredImage.alt_text) ? featuredImage.alt_text : alt ? alt : ""} 
                title={(featuredImage && featuredImage.title) ? featuredImage.title : title ? title : ""}
                />
    )

}

export default FeaturedImage