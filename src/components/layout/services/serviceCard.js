import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactHtmlParser from 'react-html-parser';

import servicesStyles from "./serviceCard.module.scss"

const ServiceCard = ({ service }) => {
    
    const { title, featured_media, excerpt, path } = service
    
    return (
        <Link to={path} title={title} className={servicesStyles.serviceLink}>
            <article className={servicesStyles.serviceCard}>
                <Img className={servicesStyles.serviceImage} alt={title} fluid={featured_media.localFile.childImageSharp.fluid} imgStyle={{objectFit: 'contain'}} />
                <h3 className={servicesStyles.serviceHeading}>{ReactHtmlParser(title)}</h3>
                <div className={servicesStyles.serviceExcerpt}>{ReactHtmlParser(excerpt)}</div>
                <p className={servicesStyles.falseLink} to={path} title={ReactHtmlParser(title)}>Learn More</p>
            </article>
        </Link>
    )
    
}

export default ServiceCard