import React from "react"
import { Link } from "gatsby"
import ReactHtmlParser from 'react-html-parser';
import { getDate, getAuthor } from "../../../functions/helperFunctions"

import Social from "../../social"

import tinyClockBlue from "../../../images/illustrations/svg/clock_icon_blue.svg"
import "./metaCard.scss"

/**
 * Blog post meta card for displaying post information
 * i.e: post categories, title, date, and share icons 
 */
const MetaCard = ({ postData }) => {

    const { author, date, modified, categories, sticky } = postData.metaProps || postData
    
    /**
     * Add ',' after all but the last category
     * @param {*} categories 
     * @param {*} idx 
     */
    const joinCats = ( categories, idx ) => (categories.length - 1 === idx) ? "" : ", "

    // console.log('metaCard postData', postData);

    return (
        <div className={( sticky ) ? "meta_card meta_card__sticky" : "meta_card"}>
           
            <div className={"meta_card__inner"}>
                <div className={"meta_card__categories_container"}>
                    {(categories) && 
                    <span className={"meta_card__categories_container__categories"}>
                        Posted in {(categories.map(( cat, idx ) => (
                            <span key={idx} className={"meta_card__category"}>
                                <Link to={cat.path}>{cat.name}</Link>{joinCats(categories, idx)}
                            </span>)))}
                    </span>}
                </div>
                
                <h3 className={"heading-2 meta_card__post_title"}>{ReactHtmlParser(postData.title)}</h3>
    
                <div className={"meta_card__post_meta"}>
                    <div className={"meta_card__post_date"}>
                        <img className={"meta_card__post_icon clock_icon"} src={tinyClockBlue} />
                        <span className={"meta_card__post_date--date"}>{getDate(modified, date)}</span>
                    </div>
                    <span className={"meta_card__post_author"}>{getAuthor(categories, author.name)}</span>
                </div>
    
                <Social post={postData} isHeader={true} />
            </div>

        </div>
    )

}

export default MetaCard