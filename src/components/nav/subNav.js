import React, { useState } from 'react'
import { Link } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import arrowDown from "../../images/illustrations/svg/Arrows/arrow-down.svg"
import arrowUp from "../../images/illustrations/svg/Arrows/arrow-up.svg"
import arrowRight from "../../images/illustrations/svg/Arrows/arrow_right.svg"

const SubNav = item => {
        
    const child = item.childItems
    const [isSubMenuOpen, toggleSubMenu] = useState(false)

    function formatLink(cItem) {
        let link = []
        if (cItem.slug !== null) {
            link.push(cItem.slug)
        } else if (cItem.url !== null) {
            link.push(cItem.url)
        } else {
            throw new Error('No URL provided to menu item')
        }

        if (cItem.child_items !== null) {

        }

    }
        
    return (
        <>
            
            <button type="button" aria-label="Toggle submenu" onClick={() => toggleSubMenu(!isSubMenuOpen)} onKeyPress={() => toggleSubMenu(!isSubMenuOpen)} className="arrow down">
                {(!isSubMenuOpen) ? <img src={arrowDown} alt="Sub menu closed" /> : <img src={arrowUp} alt="Sub menu open" />}
            </button>
            <ul className={( isSubMenuOpen ) ? "sub-menu sub-menu-open" : "sub-menu"} aria-label="submenu">
                {child.child_items.map(( childItem, i ) => (
                    <li key={i} className={(childItem.child_items === null) ? "nav-item" : "nav-item has-sub-menu"}>
                        <Link to={(child.slug === null) ? childItem.url 
                        : (childItem.slug === null) ? childItem.url 
                        : `/${child.slug}/${childItem.slug}`}>
                            {ReactHtmlParser(childItem.title)}
                        </Link>
                    {( childItem.child_items === null ) ? null : 
                    <>
                        <ul className="sub-sub-menu">
                            {childItem.child_items.map(( subItem, i ) => (
                            <li className="sub-nav-item" key={i}>
                            <img className="arrow right" src={arrowRight} alt={''} />
                                <Link to={(subItem.slug === null) ? subItem.url : `/${child.slug}/${childItem.slug}/${subItem.slug}`}>
                                    {subItem.title}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </>}  
                </li>))}
            </ul>
        </>
    )
}

export default SubNav