import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Helmet from "react-helmet"
import S from 'string'
import PageBanner from "../../components/layout/pageBanner"
import CtaBlock from "../../components/hero/ROS/ctaBlock"
import FeaturesBlock from "../../components/hero/ROS/featuresBlock"
import Facts from "../../components/hero/ROS/keyFacts"
import BenefitsBlock from "../../components/hero/ROS/keyBenefits"
import DemoVideos from "../../components/hero/ROS/demoVideos"
import PriceTable from "../../components/hero/ROS/priceTable"
import CovidSale from "../../components/hero/ROS/covidSale"
import PageContent from "../../components/layout/pageContent"

export default ({ data }) => {

    const { title, type, content, excerpt, path, slug } = data.wordpressPage

    return (
        <Layout>
            <SEO title={title} description={excerpt} path={path} />
            <Helmet title={S(title).decodeHTMLEntities().s} />
            <PageBanner bannerType={type} title={title} slug={slug} />
            <PageContent>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </PageContent>
            <CtaBlock>
                <CovidSale />
            </CtaBlock>
            <Facts />
            <FeaturesBlock />
            <DemoVideos />
            <BenefitsBlock />
            <PriceTable />
            <CtaBlock title={"Get started today"} byline={"Getting started is easier and more affordable than you might think. There are no contracts and you can cancel at anytime!"}>
                <CovidSale />
            </CtaBlock>
        </Layout>
    )
}

/**
 * Query Online Ordering System page
 */
export const queryPage = graphql`
    query ROSPage {
        wordpressPage(wordpress_id: {eq: 3593}) {
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