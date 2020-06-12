import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
import ReactHtmlParser from 'react-html-parser';

import services from "./serviceCard.module.scss"

const ServiceCard = ({ props, index }) => {
    
    const {
        title,
        featured_media,
        excerpt,
        path
    } = props.node
    
    return (
        <article className={services.serviceCard} key={index}>
            <Img className={services.serviceImage} alt={title} fluid={featured_media.localFile.childImageSharp.fluid} imgStyle={{objectFit: 'contain'}} />
            <h3 className={services.serviceHeading}>{ReactHtmlParser(title)}</h3>
            <div className={services.serviceExcerpt}>{ReactHtmlParser(excerpt)}</div>
            <Link className={services.serviceLink} to={path} title={ReactHtmlParser(title)}>Learn More</Link>
        </article>
    )
    
}

export default ServiceCard