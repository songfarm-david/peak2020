import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import "./nav.scss"
import SubNav from "./subNav";

const Nav = ({ menuToggleClass }) => {

    /* query main navigation from CMS */
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
      `)
    const navItems = query.wordpressMenusMenusItems  

    return (
      <nav id="mainNav" role="navigation" className={menuToggleClass}>
        <h2 className="screen-reader-text">Main Navigation</h2>
        <ul>{navItems.items.map((item, i) => (
            <li 
              key={i} 
              className={( item.child_items ) !== null ? 'nav-item has-child-items' : 'nav-item'}
              aria-haspopup={( item.child_items ) !== null ? true : false}>
              <Link to={item.slug}>
                {ReactHtmlParser(item.title)}
              </Link>
              {( item.child_items === null ) ? null : <SubNav childItems={item} />}
            </li>
          ))}
        </ul>
      </nav>
    )

}

export default Nav
