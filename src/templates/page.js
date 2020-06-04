/**
 * Page template
 * Mar 2020
 */

import React from "react"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout"
import PageBanner from "../components/hero/pageBanner"

import HeroSection from "../components/hero/heroSection"
import BlogFeature from "../components/blog/blogFeature"
import Newsletter from "../components/hero/newsletter"
import ContactForm from "../components/contactForm"
import Form from "../components/form"

import "../styles/pages.scss"

export default ( props ) => {
       
    const {title, content, slug, parent} = props.pageContext
    let p = parent
    if (p === null) p = ""

    function formatTitle(pageTitle) {
        let t = pageTitle.toLowerCase().replace(/\s/g, '-')
        // look for first occurence of space and replace with a dash '-'
        return t
    }

    function buildPageLayout(page) {
        // use switch statement to test page title and return appropraite elements
        // console.log('buildPageLayout called', page);
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
            (slug === 'home' && <HeroSection />) || <PageBanner pageTitle={title.toString()} parent={parent} />}
                      
            <div className={(true === p.includes('/services/')) ? 
                "page-content web-services " + formatTitle(title) : 
                "page-content " + formatTitle(title)}>
                {ReactHtmlParser(content)}
            </div>

            {buildPageLayout(slug)}     
        </Layout>
    )

}