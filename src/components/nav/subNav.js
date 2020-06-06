import React, { useState } from 'react'
import { Link } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import arrowDown from "../../images/illustrations/svg/Arrows/arrow-down.svg"
import arrowUp from "../../images/illustrations/svg/Arrows/arrow-up.svg"
import arrowRight from "../../images/illustrations/svg/Arrows/arrow_right.svg"

const SubNav = item => {
    
    // console.log('in subNav', item);
    
    const child = item.childItems
    const [isSubMenuOpen, toggleSubMenu] = useState(false)
    
    // console.log('what is children', child);
    
    return (
        <>
        <img 
            src={(!isSubMenuOpen) ? arrowDown : arrowUp} 
            className="arrow down" 
            alt={''}
            onClick={() => toggleSubMenu(!isSubMenuOpen)} 
        />
        <ul 
            className={( isSubMenuOpen ) ? "sub-menu sub-menu-open" : "sub-menu"}
            aria-label="submenu"
            >
            {child.child_items.map(( childItem, i ) => (
            <li 
                key={i}
                className={(childItem.child_items === null) ? "nav-item" : "nav-item has-sub-menu"}>
                <Link to={`${child.slug}/${childItem.slug}`}>
                    {ReactHtmlParser(childItem.title)}
                </Link>
                {( childItem.child_items === null ) ? null : 
                <>
                    <ul className="sub-sub-menu">
                        {childItem.child_items.map(( subItem, i ) => (
                        <li className="sub-nav-item" key={i}>
                        <img className="arrow right" src={arrowRight} alt={''} />
                            <Link to={`${child.slug}/${childItem.slug}/${subItem.slug}`}>
                                {subItem.title}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </>
            }  
          </li>
        ))}
      </ul>
      </>
    )
}

export default SubNav