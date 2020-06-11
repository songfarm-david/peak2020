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
import ContactForm from "../components/form/contactFormCallout"

import "../styles/pages.scss"
import { formatTitle } from "../functions/helperFunctions"

export default ( props ) => {
       console.log('page template location?', props.location.pathname);
    
    const { pathname: path } = props.location 
    const {title, content, slug} = props.pageContext
    
    return (
        <Layout specialClass={ (slug === 'home') ? "home" : null }>
            
            {(slug === 'home' && <HeroSection />) || <PageBanner bannerType="page" props={props} />}
                      
            <div className={"page-content " + formatTitle(title)}>
                {ReactHtmlParser(content)}
            </div>

            <BlogCallout />
            <Newsletter />
            <ContactForm formPath={path} isAddFields={false} />
                
        </Layout>
    )

}