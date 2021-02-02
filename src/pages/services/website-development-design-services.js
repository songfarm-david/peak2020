import React from "react"
import { graphql } from "gatsby"

/**
 * SEO Victoria BC service page
 */

 /* import page data */

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import PageBanner from "../../components/layout/pageBanner"
import PageContent from "../../components/layout/pageContent"
import LeadGenSEO from "../../components/forms/leadGenFormSEO"
import WhyUs from "../../components/hero/whyUs"
import TestimonialsCarousel from "../../components/hero/testimonials"

export default function SEOVictoriaBC({ data }) {
    console.log(data);

    const { title, content, excerpt, path, slug } = data.wordpressPage
    const { siteUrl } = data.site.siteMetadata

    return (
        <Layout>
            <SEO title={title} description={excerpt} path={siteUrl+path} />
            <PageBanner bannerType={'page'} title={'Web Design Victoria BC'} slug={slug} />

            {/* <div className={"section_container"}>
                <div className={"section_content"}>
                    <LeadGenSEO title={"Get a free consultation and SEO Audit"} byline={"Just enter your details and we'll reach out to you within a few days with your report."} sidebar={true} />
                    <div className={"hero_content"} dangerouslySetInnerHTML={{ __html: content }} />  
                </div>
            </div> */}

            <PageContent>
                <div className={`section_content--inner`}>
                    <LeadGenSEO title={"Get a Free Website & SEO Audit"} byline={"Just enter your details and we'll reach out to you within a few days with your report."} sidebar={true} />
                    <div dangerouslySetInnerHTML={{ __html: content }} />  
                </div>
            </PageContent>

            {/* <PageContent path={path} content={content} /> */}
            <TestimonialsCarousel />
            <WhyUs />
            <LeadGenSEO title={"Get a free consultation and SEO Audit"} byline={"Just enter your details and we'll reach out to you within a few days with your report."} />
        </Layout>
    )
}

/**
 * Query about page
 */
export const queryPage = graphql`
    query WebDesignDev {
        wordpressPage(wordpress_id: {eq: 1741}) {
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