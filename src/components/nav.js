import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./nav.scss"

const Nav = () => {

  const mainNav = useStaticQuery(graphql`
    query {
      wordpressMenusMenusItems(name: {eq: "Main Navigation"}) {
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
  `)

  console.log(mainNav);

  
  return (
    <nav id="mainNav">
      <ul>
      {/* {mainNav} */}
        {{mainNav.items.map( item => (
          
          <li className="navItem" key={item.title}>

            <Link to={item.slug}>{item.title}</Link>
            
            {/* { item.child_items != null ? printChildren(item) : false } */}

          </li>

        ))}}
      </ul>
    </nav>
  )
}

export default Nav

// export const queryMainNav = graphql`
//   query {
//     wordpressMenusMenusItems {
//       name
//       items {
//         title
//         slug
//         child_items {
//           title
//           slug
//           child_items {
//             title
//             slug
//           }
//         }
//       }
//     }
//   }
// `

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