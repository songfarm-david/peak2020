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

const Layout = ({ children, page }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
            subItems {
              name
              link
            }
          }
          footerLinks {
            name
            link
          }
        }
      }
    }
  `)
  
  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata.title} 
        menuLinks={data.site.siteMetadata.menuLinks} />

        <main id="mainContent" role="main">
          {children}
        </main>

        <Footer footerLinks={data.site.siteMetadata.footerLinks} />

    </>
  )
}

export default Layout
