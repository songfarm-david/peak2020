import React from "react"
import ReactHtmlParser from 'react-html-parser';
import { getDate, getAuthor } from "../../../functions/helperFunctions"

import cardStyles from "./featureBlogCard.module.scss"

/**
 * 
 * @param {*} param0 
 */
const FeatureBlogCard = (props) => {
    console.log('featureBlogCard props', props);

    const { postData } = props || {}

        const {
            title,
            author,
            categories,
            date,
            modified,
            sticky
        } = postData || postData || {}
    
    /**
     * Add ',' after all but the last category
     * @param {*} categories 
     * @param {*} idx 
     */
    const joinCats = ( categories, idx ) => (categories.length - 1 === idx) ? "" : ", "

    return (
        <div className={( sticky ) ? cardStyles.sticky : cardStyles.featuredCard}>
            <div className={cardStyles.categoriesContainer}>
                {(categories) && <span className={cardStyles.categories}>
                    Posted in {(categories.map( ( cat, idx ) => (
                    <span key={idx} className={cardStyles.category}>
                        {cat.name}{joinCats(categories, idx)}
                    </span>)))}
                </span>}
            </div>
            
            <h2>{ReactHtmlParser(title)}</h2>
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