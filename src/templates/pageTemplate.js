import React from "react"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import HeroSection from "../components/hero/heroSection"
import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import "../styles/pages.scss"

/**
 * Page template
 * Mar 2020
 */
export default ( props ) => {
    
    const {
        title, 
        content, 
        slug
    } = props.pageContext

    const { pathname: path } = props.location 
    console.log('title from page template', title);
    
    return (
        <Layout props={props} specialClass={(slug === 'home') ? "home" : null}>
            
            {(slug === 'home' && <HeroSection />) || <PageBanner bannerType="page" title={ title } />}

            <PageContent path={ title }>
                {ReactHtmlParser(content)}  
            </PageContent>

            <BlogCallout />
            <Newsletter path={path} />
            <ContactFormCallout path={path} isAddFields={false} />
                
        </Layout>
    )

}