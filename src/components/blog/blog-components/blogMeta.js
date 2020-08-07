import React from "react"
import { getAuthor, getDate } from "../../../functions/helperFunctions"
import tinyClockWhite from "../../../images/illustrations/svg/clock_icon.svg"
import tinyClockBlue from "../../../images/illustrations/svg/clock_icon_blue.svg"

import blogMeta from "./blogMeta.module.scss"

const BlogMeta = (props) => {

    const { type } = props
    const { author, date, modified, categories } = props.metaData || props

    const whichClock = (pT) => (pT === 'callout') ? tinyClockWhite : tinyClockBlue

    return (
        <div className={(props.type === 'callout') ? `${blogMeta.callout} ${blogMeta.postMetaData}` : blogMeta.postMetaData}>
            <p className={blogMeta.author}>{getAuthor(categories, author.name)}</p>
            <p className={blogMeta.dateContainer}>
                <img className={"clock_icon"} src={whichClock(type)} alt="last updated date"/>
                <span className={blogMeta.date}>{getDate(modified, date)}</span>
            </p>
        </div>
    )
}

export default BlogMeta