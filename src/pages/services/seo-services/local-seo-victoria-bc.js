import React from "react"
import { graphql } from "gatsby"

/**
 * Local SEO Victoria BC service page
 */

 /* import page data */
import {SEOFaq} from "../../../data/seo-faq"
import {SEOProcess} from "../../../data/seo-process" 

import Layout from "../../../components/layout/layout"
import SEO from "../../../components/seo"
import PageBanner from "../../../components/layout/pageBanner"
import PageContent from "../../../components/layout/pageContent"
import LeadGenSEO from "../../../components/forms/leadGenFormSEO"
import List from "../../../components/layout/widgets/list"
import Partners from "../../../components/hero/partners"
import Accordion from "../../../components/layout/widgets/accordion"
import WhyUs from "../../../components/hero/whyUs"
import TestimonialsCarousel from "../../../components/hero/testimonials"

export default function SEOVictoriaBC({ data }) {
    console.log(data);

    const { title, content, excerpt, path, slug } = data.wordpressPage
    const { siteUrl } = data.site.siteMetadata

    return (
        <Layout>
            
            <SEO title={title} description={excerpt} path={siteUrl+path} />
            <PageBanner bannerType={'page'} title={'SEO Victoria BC'} slug={slug} />
           
            <PageContent>
                <div className={`section_content--inner`}>
                    <LeadGenSEO title={"Get a Free Consultation and SEO Audit"} byline={"Just enter your details and we'll reach out to you within a few days with your report."} sidebar={true} />
                    <div dangerouslySetInnerHTML={{ __html: content }} />  
                </div>
            </PageContent>

            {/* <Partners /> */}
            <List title={'Our SEO Process'} content={SEOProcess} bgImg={true} />
            <TestimonialsCarousel />
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
    query LocalSEOVictoria {
        wordpressPage(wordpress_id: {eq: 3419}) {
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