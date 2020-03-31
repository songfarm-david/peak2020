import React from "react"
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"
import "./nav.css"

export default ({  }) => {
    
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

console.log( mainNav )

    return(
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {mainNav.items.map( item => (
                <li
                  key={item.title}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} to={item.slug}>
                    {item.title}
                  </Link>
                  <ul>
                    { item.child_items != null ? item.child_items.map( childItem => (
                        <li className="l"
                          key={childItem.title}
                          style={{
                            listStyleType: `none`,
                            padding: `1rem`,
                          }}
                        >
                        <Link style={{ color: `white` }} to={childItem.slug} dangerouslySetInnerHTML={{ __html: childItem.title}}>
                        </Link>  
                        </li>
                      )) 
                      : false 
                    }
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    )

}