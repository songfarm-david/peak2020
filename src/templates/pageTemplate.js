/**
 * Page template
 * Mar 2020
 */

import React from "react"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout/layout"
import PageBanner from "../components/hero/pageBanner"
import HeroSection from "../components/hero/heroSection"
import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/hero/newsletter"
import ContactForm from "../components/layout/contactForm"

import "../styles/pages.scss"
import { formatTitle } from "../functions/helperFunctions"

export default ( props ) => {
       
    const {title, content, slug, parent} = props.pageContext
    let p = parent

    if (p === null) p = ""
    
    return (
        <Layout specialClass={ (slug === 'home') ? "home" : null }>
            
            {(slug === 'home' && <HeroSection />) || <PageBanner bannerType="page" props={props} />}
                      
            <div className={(true === p.includes('/services/')) ? 
                "page-content web-services " + formatTitle(title) : 
                "page-content " + formatTitle(title)}
                >
                {ReactHtmlParser(content)}
            </div>

            <BlogCallout />
            <Newsletter />
            <ContactForm isAddFields={false} />
                
        </Layout>
    )

}