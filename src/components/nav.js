import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./nav.css"

export default ({ menuLinks }) => {
    

    // const subMenu = Object.values(menuLinks.subItems)
    console.log(menuLinks);

    menuLinks.map(link => (
      console.log(link)
    ))

    return(
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map( link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                  <ul>
                    { link.subItems != null ? link.subItems.map( subLink => (
                        <li
                          key={subLink.name}
                          style={{
                            listStyleType: `none`,
                            padding: `1rem`,
                          }}
                        >
                        <Link style={{ color: `white` }} to={subLink.subLink}>
                          {subLink.name}
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


// const data = useStaticQuery(graphql`
    //     query navigation {
    //         allWordpressPage( filter: { wordpress_id: { 
    //             in: [1718, 2517, 703, 1722]
    //         }}) {
    //             edges {
    //                 node {
    //                     wordpress_id
    //                     title
    //                     slug
    //                     link
    //                     status
    //                     excerpt
    //                     content
    //                 }
    //             }
    //         }
    //     } 
    // `)

    // console.log(data.allWordpressPage)

    // const {allWordpressPage} = data

    // allWordpressPage.edges.forEach(({ node }) => {
    //     // console.log(node.slug, node.title)
    // })