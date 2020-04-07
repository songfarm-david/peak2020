/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Banner from "./hero/home-banner"
import Footer from "./footer"

import "../styles/layout.scss"

const Layout = ({ children, page }) => {
  
  console.log(page)
  
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
          legalLinks {
            name
            link
          }
        }
      }
    }
  `)
  
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />

      <div>
        
        { 
          /* if home page, display hero banner */
          (page) ? 
            <Banner /> : null 
        }

        <main id="mainContent">
          {children}
        </main>

        <Footer 
          footerLinks={data.site.siteMetadata.footerLinks}
          legalLinks={data.site.siteMetadata.legalLinks} 
        />

      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
