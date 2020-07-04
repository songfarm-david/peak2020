import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import "./nav.scss"
import SubNav from "./subNav";

const Nav = ({ menuToggleClass }) => {

    const mainNavQuery = useStaticQuery(
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
    const navItems = mainNavQuery.wordpressMenusMenusItems  
    
    return (
        <nav role="navigation" id="mainNav" className={menuToggleClass} onClick={(e) => e.stopPropagation()}>
            <h2 className="screen-reader-text">Main Navigation</h2>
            <ul>{navItems.items.map((item, i) => {
                return (
                <li 
                    key={i} 
                    aria-haspopup={( item.child_items ) !== null ? true : false} 
                    className={( item.child_items ) !== null ? 'nav-item has-child-items' : 'nav-item'}>
                    <Link to={"/"+item.slug}>
                        {ReactHtmlParser(item.title)}
                    </Link>
                    {( item.child_items === null ) ? null : <SubNav childItems={item} />}
                </li>)})}
            </ul>
        </nav>
    )

}

export default Nav

