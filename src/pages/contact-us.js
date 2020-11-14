import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import ContactForm from "../components/form/contactFormCallout"

import "../styles/pages.scss"

import SEO from "../components/seo"
import Helmet from "react-helmet"
import S from 'string'

export default ({ data, location }) => {
    console.log('contact us location', location);

    console.log('data', data);
    
    console.log('data.site.siteMetadata', data.site.siteMetadata);
    const { path, title, type, excerpt, slug } = data.wordpressPage
    const { siteUrl, keywords } = data.site.siteMetadata

    // console.log(siteUrl, path);

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
					"url": `${siteUrl}${path}`
				},
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"url": `${siteUrl}`
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

    return (
        <Layout path={path} layoutClass={title}>

            <SEO 
                title={title} 
                description={excerpt} 
                path={location.href} />

            <Helmet title={S(title).decodeHTMLEntities().s}>
                <script type="application/ld+json">{JSON.stringify(schemaContact)}</script>
            </Helmet>

            <PageBanner bannerType="page" title={title} slug={slug} />

            <PageContent path={slug} type={type}>

                <ContactForm 
                    heading="Free Consultation" 
                    paragraph="Take the first step today and let us know what problem you’re trying to solve. We’d love to hear from you and would be happy to help!" 
                    formPath={path} isAddFields={true} />

            </PageContent>

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