import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./nav.scss"

export default () => {
    
  const data = useStaticQuery(graphql`
    query navQuery {
      wordpressMenusMenusItems(wordpress_id: {eq: 190}) {
        name
        items {
          title
          slug
          wordpress_id
          child_items {
            title
            slug
            wordpress_id
          }
        }
      }
    }
  `)

  const { wordpressMenusMenusItems: mainNav } = data

  return(
    <nav id="mainNav">
      <ul>
        {mainNav.items.map( item => (
          
          <li className="navItem" key={item.title}>

            <Link to={item.slug} className="heading-5">{item.title}</Link>
            
            { item.child_items != null ? printChildren(item) : false }

          </li>

        ))}
      </ul>
    </nav>
  )

}

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