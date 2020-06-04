/**
 * Page template
 * Mar 2020
 */

import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout"
import PageBanner from "../components/hero/pageBanner"

// import Header from "../components/header"
import HeroSection from "../components/hero/heroSection"
import BlogFeature from "../components/blog/blogFeature"
// import TestimonialsCarousel from "../components/testimonials"
import Newsletter from "../components/hero/newsletter"
import ContactForm from "../components/contactForm"
import Form from "../components/form"
// import Footer from "../components/footer"

import "../styles/pages.scss"

export default ({ data, location }) => {
    // console.log(data, location, location.pathname);

    // const {pagePath} = location.pathname
       
    const {title, content, slug} = data.wordpressPage

    function formatTitle(pageTitle) {
        let t = pageTitle.toLowerCase().replace(/\s/g, '-')
        // look for first occurence of space and replace with a dash '-'
        return t
    }

    function buildPageLayout(page) {
        // use switch statement to test page title and return appropraite elements
        console.log('buildPageLayout called', page);
        switch ( page ) {
            case 'contact-us': 
                return <Form />
            case 'blog':
                return (
                    <>
                    <Newsletter />
                    <ContactForm />
                    </>
                )
            default: 
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
        <Layout>

            {/* show either hero section or a page banner */
            (slug === 'home' && <HeroSection />) || <PageBanner pageTitle={formatTitle(title)} />}
                      
            <div className={"page-content " + formatTitle(title)}>
                {ReactHtmlParser(content)}
            </div>

            {buildPageLayout(slug)}
                
        </Layout>
    )

}

/**
 * Query for all published PAGES
 */
export const pageQuery = graphql`
    query( $wordpress_id: Int! ) {
        wordpressPage(wordpress_id: {eq: $wordpress_id}) {
            wordpress_id
            slug
            status
            title
            excerpt
            content
        }
    }
`