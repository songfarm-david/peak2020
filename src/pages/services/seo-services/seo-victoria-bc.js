import React from "react"
/**
 * SEO Victoria BC service page
 */

 /* import page data */
import {SEOFaq} from "../../../data/seo-faq"
import {SEOProcess} from "../../../data/seo-process" 

import Layout from "../../../components/layout/layout"
import PageBanner from "../../../components/layout/pageBanner"
import PageContent from "../../../components/layout/pageContent"
import LeadGenSEO from "../../../components/form/leadGenFormSEO"
import List from "../../../components/hero/list"
import Partners from "../../../components/hero/partners"
import Accordion from "../../../components/layout/widgets/accordion"
import WhyUs from "../../../components/hero/whyUs"

export default function SEOVictoriaBC() {
    console.log(SEOFaq);
    return (
        <Layout>
            <PageBanner bannerType={'page'} title={'SEO Victoria BC'} slug={''} />
            <LeadGenSEO title={"Get a free consultation and SEO Audit"} byline={"Just enter your details and we'll reach out to you within a few days with your report."} sidebar={true} />
            <PageContent />
            <Partners />
            <List title={'Our SEO Process'} content={SEOProcess} bgImg={true} />
            <WhyUs />
            <LeadGenSEO title={"Get a free consultation and SEO Audit"} byline={"Just enter your details and we'll reach out to you within a few days with your report."} />
            <Accordion title={'SEO FAQ'} content={SEOFaq} />
        </Layout>
    )
}

/**
 * Query about page
 */
export const queryPage = graphql`
    query aboutPage {
        wordpressPage(wordpress_id: {eq: 3850}) {
            title
            content
            type
            path
            slug
            excerpt
        }
        site {
            siteMetadata {
                title
                siteUrl
                keywords
                contactEmail
                telephone
                author
                image
            }
        }
    }
`