/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.scss"

import Banner from "./hero/homeBanner"
import BlogCallout from "./blog/blogCallout"

const Layout = ({ children, page }) => {
  
  let keywords = ['management','development','design','SEO','consulting','webmaster services']

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
      <Header 
        siteTitle={data.site.siteMetadata.title} 
        menuLinks={data.site.siteMetadata.menuLinks} 
        />

      <div>
        { /* if home page, display hero banner */
          (page) 
          ? <Banner keywords={keywords} /> 
          : null 
        }

        <main id="mainContent">
          {children}
        </main>

        <BlogCallout />

        <Footer 
          footerLinks={data.site.siteMetadata.footerLinks}
          legalLinks={data.site.siteMetadata.legalLinks} 
        />

      </div>

    </>
  )
}

export default Layout
