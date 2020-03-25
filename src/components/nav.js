import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./nav.css"

export default ({ menuLinks }) => {
    
    console.log(menuLinks);
    

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
    
    return(
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
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
                </li>
              ))}
            </ul>
          </nav>
        </div>
    )
    
}
