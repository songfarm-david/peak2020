import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./nav.scss"
import arrowDown from "../images/illustrations/svg/Arrows/arrow-down.svg"
import arrowRight from "../images/illustrations/svg/Arrows/arrow_right.svg"

const Nav = ({className}) => {

  const query = useStaticQuery(
    graphql`
      query {
        wordpressMenusMenusItems(wordpress_id: {eq: 190}) {
          id: wordpress_id
          name
          items {
            title
            slug
            child_items {
              title
              slug
              child_items {
                title
                slug
              }
            }
          }
        }
      }
    `
  )

  const navItems = query.wordpressMenusMenusItems
  
  return (
    <nav id="mainNav" className={className}>
      <ul> 
        {navItems.items.map((item, i) => (
          <li className={(item.child_items) !== null ? 'nav-item has-child-items' : 'nav-item'} key={i}>
            <Link to={item.slug}>{item.title}</Link>
            {(item.child_items === null) ? null :
            <>
              <img className="arrow down" src={arrowDown} alt={''} />
              {printChildren(item)}
            </>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav

/**
 * Prints nav item children two levels deep 
 * @param {Obj} item a navigation item that has sub items
 */
function printChildren(item) {
  
  return (
    <ul className="sub-menu">
      {item.child_items.map( (childItem, i) => (
        <li className="nav-item" key={i}>
          <Link to={childItem.slug}>{childItem.title}</Link>
          {(childItem.child_items === null) ? null : 
          <>
            
            <ul className="sub-sub-menu">
              {childItem.child_items.map( (subItem, i) => (
                <li className="sub-nav-item" key={i}>
                <img className="arrow down" src={arrowRight} alt={''} />
                  <Link to={subItem.slug}>{subItem.title}</Link>
                </li>
              ))}
            </ul>
          </>
          }  
        </li>
      ))}
    </ul>
  )

}