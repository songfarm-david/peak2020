import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import S from 'string'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"

import HeroSection from "../components/hero/heroSection"
import Testimonials from "../components/hero/testimonials"
import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import CtaBlock from "../components/hero/ROS/ctaBlock"
import FeaturesBlock from "../components/hero/ROS/featuresBlock"
import Facts from "../components/hero/ROS/keyFacts"
import BenefitsBlock from "../components/hero/ROS/keyBenefits"
import DemoVideos from "../components/hero/ROS/demoVideos"
import PriceTable from "../components/hero/ROS/priceTable"

import "../styles/pages.scss"
import "../styles/layout.scss"

/**
 * Page template
 * Mar 2020
 */
export default ({ data, location }) => {
    // console.log('what is a page template data, location', data, location );
    
    const { 
        title, 
        type,
        excerpt, 
        path,
        content, 
        slug, 
        featured_media, 
        parent_element 
    } = data.wordpressPage

    // console.log('in page template, what is location.pathname', location.pathn);
    

    return (
        <Layout path={location.pathname} layoutClass={(parent_element) ? parent_element.slug+title : title}>

            <SEO title={title} description={excerpt} image={featured_media} path={path} />
            <Helmet title={S(title).decodeHTMLEntities().s} />

            { (location.pathname === '/' && <HeroSection />) || 
            <PageBanner bannerType={type} title={title} slug={slug} />}

            <PageContent path={slug} type={(parent_element) ? parent_element.slug : type} content={content} featuredMedia={featured_media} />

            {(location.pathname === '/' && <Testimonials />)}

            {slug !== 'online-ordering-system-restaurants' && <>
                <BlogCallout />
                <Newsletter path={location.pathname} />
                <ContactFormCallout path={location.pathname} isAddFields={false} />
            </>}

            {slug === 'online-ordering-system-restaurants' && <>
                <CtaBlock />
                <Facts />
                <FeaturesBlock />
                <BenefitsBlock />
                <DemoVideos />
                <PriceTable />
                <CtaBlock title={"Get started today"} byline={"Getting started is easier and more affordable than you might think. There are no contracts and you can cancel at anytime!"} />
            </>}
                
        </Layout>
    )
}

export const pageQuery = graphql`
    query($id: String!) {
        wordpressPage(id: { eq: $id}) {
            wordpress_id
            title
            status
            path
            content
            excerpt
            type
            slug
            parent_element {
                id
                slug
            }
            featured_media {
                alt_text
                localFile {
                    url
                    childImageSharp {
                        fluid {
                        ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                media_details {
                    height
                    width
                }
            }
        }
    } 
`