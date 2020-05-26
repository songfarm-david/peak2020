import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import arrow from "../images/illustrations/svg/Arrows/arrow-down.svg"
import "./nav.scss"

const Nav = () => {

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
            }
          }
        }
      }
    `
  )

  console.log(query.wordpressMenusMenusItems.items);

  const navItems = query.wordpressMenusMenusItems
  
  return (
    <nav id="mainNav">
      <ul> 
        {navItems.items.map((item, i) => (
          <li className="navItem" key={i}>
            <Link to={item.slug}>{item.title}</Link>
            
            {(item.child_items !== null) ? <img className="menuChildArrow" src={arrow} alt={''} /> : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav

/** 
 * Checks for subMenu items and prints the corresponding HTML 
 */
function printChildren(item) {
  
  return (
    <ul className="subMenu">
      {item.child_items.map( childItem => (
        <li className="navItem" key={childItem.title}>
          <Link to={childItem.slug} dangerouslySetInnerHTML={{ __html: childItem.title}}></Link>  
        </li>
      )) }
    </ul>
  )

}