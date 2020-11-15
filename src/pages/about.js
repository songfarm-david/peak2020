import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"

import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import SEO from "../components/seo"
import Helmet from "react-helmet"
import S from 'string'

export default ({ data, location }) => {
    
    const { title, type, content, excerpt, path, slug } = data.wordpressPage
    const { siteUrl, keywords, telephone, contactEmail, image } = data.site.siteMetadata

    const schemaAbout = {
		"@context": "http://schema.org",
		"@type": "AboutPage",
		"breadcrumb": {
			"@type": "BreadcrumbList",
			"itemListElement":
			[
				{
					"@type": "ListItem",
					"position": 2,
					"name": "About",
					"item": `${siteUrl}${path}`
				},
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": `${siteUrl}`
				}
			],
			"itemListOrder": "Ascending"
		},
		"mainContentOfPage": {
			"@type": "WebPageElement",
			"cssSelector": "#pageContent"
		},
		"significantLink": [
			"https://peakwebsites.ca/services/seo-services",
            "https://peakwebsites.ca/services/seo-services/local-seo",
            "https://peakwebsites.ca/services/website-development-design-services",
            "https://peakwebsites.ca/services",
			"https://peakwebsites.ca/contact-us/"
		],
		// NOTE: make significantLink array with other services
		"speakable": ["#pageContent"],
		"about": "About Peak Websites",
		"keywords": keywords,
		"review": {
			"@type": "Review",
			"itemReviewed": {
				"@type": "LocalBusiness",
				"name": data.site.siteMetadata.title,
                "logo": image,
                "image": image,
				"telephone": telephone,
				"email": contactEmail,
				"aggregateRating": {
					"@type": "AggregateRating",
					"itemReviewed": "Peak Websites",
					"reviewCount": "22",
					"ratingValue": "4.7"
				}
			},
			"reviewBody": "With Dave at Peak Websites, you're in good hands! Dave is a reliable source of knowledge and experience if you're looking to grow your footprint online or want to turn your website into a resource that works for your business.",
			"author": {
				"@type": "Person",
				"name": "Gordon Paterson",
				"url": "https://cadencecreativestudio.com/"
			}
		},
		"name": "About Peak Websites",
		"url": `${siteUrl}${path}`
    }
    
    return (
        <Layout path={path} layoutClass={title}>

            <SEO title={title} description={excerpt} path={location.href} />

            <Helmet title={S(title).decodeHTMLEntities().s}>
                <script type="application/ld+json">{JSON.stringify(schemaAbout)}</script>
            </Helmet>

            <PageBanner bannerType={type} title={title} slug={slug} />
            <PageContent path={slug} type={type} content={content} />
            
            <BlogCallout />
            <Newsletter path={path} />
            <ContactFormCallout path={path} />
            
        </Layout>
    )
}

/**
 * Query about page
 */
export const queryPage = graphql`
    query aboutPage {
        wordpressPage(wordpress_id: {eq: 1718}) {
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