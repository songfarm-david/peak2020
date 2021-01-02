import React from "react"

import "./list.scss"

/**
 * 
 * @param {string} title the title for the list
 * @param {array} content an array of objects @see data/seo-process
 * @param {bool} bgImg whether to show background image behind list, default is true 
 */
const List = ({title, content, bgImg = true}) => {

    return (
        <section className={"section_container " + (bgImg ? 'hasBgImg' : '')}>
            {bgImg && <div className={"bg_img bg_img__trail"}></div>}
            <div className={"section_content"}>
                    <h2>{title}</h2>
                    <div className={"list"}>
                        {content.map(({title, description}, idx) => (
                            <div className={"list_point_container"}>
                                <h3 className={"list_title"}>{title}</h3>
                                <p dangerouslySetInnerHTML={{__html: description}} />
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}

export default List