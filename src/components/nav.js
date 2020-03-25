import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./nav.css"

export default () => {
    
    const data = useStaticQuery(graphql`
        query navigation {
            allWordpressPage( filter: { wordpress_id: { 
                in: [1718, 2517, 703, 1722]
            }}) {
                edges {
                    node {
                        wordpress_id
                        title
                        slug
                        link
                        status
                        excerpt
                        content
                    }
                }
            }
        } 
    `)

    // console.log(data.allWordpressPage)

    const {allWordpressPage} = data

    allWordpressPage.edges.forEach(({ node }) => {
        // console.log(node.slug, node.title)
    })
    
    return(
        <div>
            <ul id="site-nav">
                <li>About</li>
                <li>Consulting</li>
                <li>Services</li>
                <li><Link to="/">Blog</Link></li>
                
                <li>Contact</li>
            </ul>
        </div>
    )
    
}
