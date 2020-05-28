import React, { useState } from 'react'
import { Link } from "gatsby"

import arrowDown from "../images/illustrations/svg/Arrows/arrow-down.svg"
import arrowRight from "../images/illustrations/svg/Arrows/arrow_right.svg"

const SubNav = item => {
    
    const [isSubMenuOpen, toggleSubMenu] = useState(false)
    // console.log(item.childItems);

    const children = item.childItems
    console.log(children);
    
    return (
        <>

        <img 
            src={arrowDown} 
            className="arrow down" 
            alt={''}
            onClick={() => toggleSubMenu(!isSubMenuOpen)} 
        />
        <ul 
            className={( isSubMenuOpen ) ? "sub-menu sub-menu-open" : "sub-menu"}>
            {children.child_items.map(( childItem, i ) => (
            <li 
                key={i}
                className="nav-item">
                <Link to={childItem.slug}>
                    {childItem.title}
                </Link>
                {( childItem.child_items === null ) ? null : 
                <>
                    <ul className="sub-sub-menu">
                        {childItem.child_items.map(( subItem, i ) => (
                        <li className="sub-nav-item" key={i}>
                        <img className="arrow right" src={arrowRight} alt={''} />
                            <Link to={subItem.slug}>
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