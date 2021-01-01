import React from "react"
/**
 * SEO Victoria BC service page
 */

 /* import page data */
import {SEOFaq} from "../../../data/seo-faq"
 
import Layout from "../../../components/layout/layout"

import Accordion from "../../../components/layout/widgets/accordion"
import WhyUs from "../../../components/hero/whyUs"

export default function SEOVictoriaBC() {
    console.log(SEOFaq);
    return (
        <Layout>
            <WhyUs></WhyUs>
            <Accordion title={'SEO FAQ'} content={SEOFaq} />
        </Layout>
    )
}