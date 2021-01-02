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

import List from "../../../components/hero/list"
import Partners from "../../../components/hero/partners"
import Accordion from "../../../components/layout/widgets/accordion"
import WhyUs from "../../../components/hero/whyUs"

export default function SEOVictoriaBC() {
    console.log(SEOFaq);
    return (
        <Layout>
            <PageBanner bannerType={'page'} title={'SEO Victoria BC'} slug={''} />
            <PageContent />
            <Partners />
            <List title={'Our SEO Process'} content={SEOProcess} bgImg={true} />
            <WhyUs />
            <Accordion title={'SEO FAQ'} content={SEOFaq} />
        </Layout>
    )
}