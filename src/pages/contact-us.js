import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import ContactForm from "../components/forms/contactFormCallout"

import "../styles/pages.scss"

import SEO from "../components/seo"
import Helmet from "react-helmet"
import S from 'string'

export default ({ data, location }) => {

    const { path, title, type, excerpt, slug } = data.wordpressPage
    const { siteUrl, keywords } = data.site.siteMetadata

    const schemaContact = {
		"@context": "http://schema.org",
		"@type": "ContactPage",
		"breadcrumb": {
			"@type": "BreadcrumbList",
			"itemListElement":
			[
				{
					"@type": "ListItem",
					"position": 2,
					"name": "Contact",
					"item": `${siteUrl}${path}`
				},
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": `${siteUrl}`
				}
			]
		},
		"mainContentOfPage": {
			"@type": "WebPageElement",
			"cssSelector": "#pageContent"
		},
		"speakable": ["#pageContent"],
		"about": "Contact Peak Websites",
		"keywords": keywords,
		"name": data.site.siteMetadata.title,
		"url": `${siteUrl}${path}`
    }
    
    const contactFormCopy = "Take the first step today and let us know what problem you’re trying to solve. We’d love to hear from you and would be happy to help!"

    return (
        <Layout path={path} layoutClass={title}>
            <SEO title={title} description={excerpt} path={location.href} />
            <Helmet title={S(title).decodeHTMLEntities().s}>
                <script type="application/ld+json">{JSON.stringify(schemaContact)}</script>
            </Helmet>

            <PageBanner bannerType="page" title={title} slug={slug} />
            <ContactForm heading="Free Consultation" paragraph={contactFormCopy} formPath={path} isAddFields={true} />
            
        </Layout>
    )

}

/**
 * Query contact page
 */
export const queryPage = graphql`
    query contactPage {
        wordpressPage(wordpress_id: {eq: 1722}) {
            title
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
            }
        }
    }
`