import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

/**NOTE: should use propTypes checking on these data */
const Layout = ({ children }) => {

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)

    return ( 
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main role="main">
                {children}
            </main>
            <Footer />
        </> 
    )
}

export default Layout
