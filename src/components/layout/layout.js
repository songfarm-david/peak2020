import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { formatTitle } from "../../functions/helperFunctions"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ layoutClass, children, path }) => {
    console.log('layout location?', path);
    
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
  
    return ( <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main id="mainContent" role="main" className={(layoutClass) ? formatTitle(layoutClass) : null}>{children}</main>
        <Footer path={path} />
    </> )
}

export default Layout
