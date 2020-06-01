/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

import Header from "./header"
import HeroSection from "./hero/heroSection"
import BlogFeature from "./blog/blogFeature"
import TestimonialsCarousel from "./testimonials"
import Newsletter from "./newsletter"
import ContactForm from "./contactForm"
import Footer from "./footer"
// import BlogFeature from "./blog/blogFeature"

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
  console.log(page);

  function pageLayout(page) {
    if (page == "contact") return
    if (page == "blog") {
      return (
        <>
        <Newsletter />
        <ContactForm />
        </>
      )
    } else {
      return (
        <>
        <BlogFeature />
        <Newsletter />
        <ContactForm />
        </>
      )
    }
  }
  
  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata.title} 
        menuLinks={data.site.siteMetadata.menuLinks} />

      <div>

        {(page == "index") ? 
          <HeroSection /> : null }

        <main id="mainContent">
          {children}
        </main>

        {/* {(page == "index") ? 
        <TestimonialsCarousel /> : null } */}
        
        {pageLayout(page)}

        <Footer  
          footerLinks={data.site.siteMetadata.footerLinks} />

      </div>

    </>
  )
}

export default Layout
