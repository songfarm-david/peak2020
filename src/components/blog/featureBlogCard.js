import React from "react"
import ReactHtmlParser from 'react-html-parser';
import { getDate, getAuthor } from "../../functions/helperFunctions"

import cardStyles from "./featureBlogCard.module.scss"

/**
 * 
 * @param {*} param0 
 */
const FeatureBlogCard = ( post ) => {
    
    console.log('props', post.props);

    const {
        title,
        modified,
        date,
        categories,
        author
    } = post.props

    const isSticky = post.props.sticky
    
    const customJoin = ( categories, idx ) => (categories.length - 1 === idx) ? "" : ", "

    // const { title, modified, date, categories, author } = stickyPost.sticky

    return (
        <div className={( isSticky ) ? cardStyles.sticky : cardStyles.featuredCard}>
            <div className={cardStyles.categoriesContainer}>
                {(categories) && <span className={cardStyles.categories}>
                    Posted in {(categories.map( ( cat, idx ) => (
                    <span key={idx} className={cardStyles.category}>
                        {cat.name}{customJoin(categories, idx)}
                    </span>)))}
                </span>}
            </div>
            
            <h2 className={( isSticky ) ? `heading-2 ${cardStyles.heading}` : `heading-1 ${cardStyles.heading}`}>{ReactHtmlParser(title)}</h2>
            <div className={cardStyles.postMetaData}>
                <div className={cardStyles.postMeta}>
                    <span>{getDate(modified, date)}</span>
                </div>
                <span className={cardStyles.author}>{getAuthor(categories, author.name)}</span>
            </div>
        </div>
    )

}

export default FeatureBlogCard