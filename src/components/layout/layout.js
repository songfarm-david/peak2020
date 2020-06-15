import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = (props) => {
    console.log('layout.js. props', props);
    
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
            <main id="mainContent" role="main" className={(props.layoutClass) ? props.layoutClass : null}>
                {props.children}
            </main>
            <Footer path={'path'} />
        </>
    )
}

export default Layout
