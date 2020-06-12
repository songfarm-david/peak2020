import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, specialClass }) => {
    
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
  
    return (
        <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main id="mainContent" role="main" className={(specialClass) ? specialClass : null}>
            {children}
        </main>
        <Footer />
        </>
    )
}

export default Layout
