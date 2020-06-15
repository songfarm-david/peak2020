import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"

import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

export default ({data, location}) => {

    // const { title, content } = data.wordpressPage
    // const { pathname: path } = location

    // console.log('about.js. content is array?', content instanceof Array);
    // console.log('about.js. content is obj?', content instanceof Object);

    return (
        <Layout path={location.pathname} layoutClass="about">
            <PageBanner bannerType="page" title={"About"} />
            <PageContent path={location.pathname} type="page" content={data} />
            <BlogCallout />
            <Newsletter path={location.pathname} />
            <ContactFormCallout path={location.pathname} />
        </Layout>
    )
}

/**
 * Query about page
 */
export const queryPage = graphql`
    query aboutPage {
        wordpressPage(wordpress_id: {eq: 1718}) {
            content
        }
    }
`