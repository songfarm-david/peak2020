import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactHtmlParser from 'react-html-parser';

import services from "./serviceCard.module.scss"

const ServiceCard = (props) => {
    
    const {
        title,
        featured_media,
        excerpt,
        path
    } = props.service.node
    
    return (
        <Link to={path} title={title} className={services.serviceLink}>
            <article className={services.serviceCard}>
                <Img className={services.serviceImage} alt={title} fluid={featured_media.localFile.childImageSharp.fluid} imgStyle={{objectFit: 'contain'}} />
                <h3 className={services.serviceHeading}>{ReactHtmlParser(title)}</h3>
                <div className={services.serviceExcerpt}>{ReactHtmlParser(excerpt)}</div>
                <p className={services.falseLink} to={path} title={ReactHtmlParser(title)}>Learn More</p>
            </article>
        </Link>
    )
    
}

export default ServiceCard