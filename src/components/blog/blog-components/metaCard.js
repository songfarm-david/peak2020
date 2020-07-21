import React from "react"
import { Link } from "gatsby"
import ReactHtmlParser from 'react-html-parser';
import { getDate, getAuthor } from "../../../functions/helperFunctions"

import "../../../styles/blog/metaCard.scss"

/**
 * 
 * @param {*} param0 
 */
const MetaCard = ({ postData }) => {

    const { author, date, modified, categories, sticky } = postData.metaProps || postData
    
    /**
     * Add ',' after all but the last category
     * @param {*} categories 
     * @param {*} idx 
     */
    const joinCats = ( categories, idx ) => (categories.length - 1 === idx) ? "" : ", "

    return (
        <div className={( sticky ) ? "metaCard sticky" : "metaCard"}>
           
            <div className={"categoriesContainer"}>
                {(categories) && 
                <span className={"categories"}>
                    Posted in {(categories.map(( cat, idx ) => (
                        <span key={idx} className={"category"}>
                            <Link to={cat.path}>{cat.name}</Link>{joinCats(categories, idx)}
                        </span>)))}
                </span>}
            </div>
            
            <h2>{ReactHtmlParser(postData.title)}</h2>

            <div className={"postMeta"}>
                <div className={"postDate"}>
                    <span>{getDate(modified, date)}</span>
                </div>
                <span className={"postAuthor"}>{getAuthor(categories, author.name)}</span>
            </div>

        </div>
    )

}

export default MetaCard