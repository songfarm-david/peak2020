import React from "react"

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
    // console.log('page template props', props);
    
    const { pathname: path } = props.location

    const {
        title,
        slug } = props.pageContext

    return (
        <Layout props={props} specialClass={(slug === 'home') ? "home" : null}>
            
            {(slug === 'home' && <HeroSection />) || <PageBanner bannerType="page" title={ title } />}

            <PageContent path={ title } pageData={props.pageContext} />

            <BlogCallout postData={props} />
            <Newsletter path={path} />
            <ContactFormCallout path={path} isAddFields={false} />
                
        </Layout>
    )

}