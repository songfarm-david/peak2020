/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

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
