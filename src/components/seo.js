/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/* helper package for transforming strangs! https://www.npmjs.com/package/string */
import S from 'string'
import { siteMetadata } from "../../gatsby-config"

function SEO({ title, description, image, meta, lang, path }) {
    
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    titleTemplate
                    description
                    author
                    image
                    facebookURL
                    twitterURL
                    twitterUsername
                    siteUrl
                    telephone
                    keywords
                    contactEmail
                }
            }
        }
    `)

    const pageTitle = S(title).decodeHTMLEntities().s || site.siteMetadata.title
    const metaDescription = S(description).stripTags().decodeHTMLEntities().s || site.siteMetadata.description
    const metaImage = image || site.siteMetadata.image
    const siteUrl = path || site.siteMetadata.siteUrl
    const canonical = path || false

    const { facebookURL, twitterURL, telephone, author } = site.siteMetadata
         
    // generic schema here
    const schemaWebsite = {
		"@context": "http://schema.org",
		"@type": "WebSite",
		"about": siteMetadata.description,
		"alternativeHeadline": "Pursuing Peak performance for your business",
		"author": {
			"@type": "Organization",
			"name": siteMetadata.title
		},
		"creator": {
			"@type": "Organization",
			"name": siteMetadata.title
		},
		"headline": siteMetadata.description,
		"inLanguage": "English",
		"keywords": siteMetadata.keywords,
		"sourceOrganization": {
			"@type": "Organization",
			"name": siteMetadata.title
		},
		"thumbnailUrl": siteMetadata.image,
		"alternateName": "Peak Website Services",
		"description": siteMetadata.description,
		"image": siteMetadata.image,
		"name": siteMetadata.title,
		"sameAs": [facebookURL, twitterURL],
		"url": siteMetadata.siteUrl
    }
    
    const schemaLocalBusiness = {
		"@context": "http://schema.org",
		"@type": "localBusiness",
		"currenciesAccepted": "CAD",
		"openingHours": "Mo-Su",
		"paymentAccepted": "Cash, Credit Card, eTransfer",
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "Canada",
			"addressLocality": "Victoria",
			"addressRegion": "BC",
			"postalCode": "V8V 5A1",
			"streetAddress": "1061 Fort St, Unit 204"
		},
		"aggregateRating": {
			"@type": "AggregateRating",
			"itemReviewed": siteMetadata.title,
			"reviewCount": "22",
			"ratingValue": "4.7"
		},
		"contactPoint" : {
			"@type" : "ContactPoint",
			"availableLanguage": "English, Spanish",
			"contactType" : "Info",
			"email": "sayhello@peakwebsites.ca",
			"hoursAvailable": "10:00-18:00",
			"telephone" : telephone
		},
		"email": "david@peakwebsites.ca",
		"founder": {
			"@type": "Person",
			"name": author,
			"email": "david@peakwebsites.ca",
			"knowsLanguage": "English, Spanish",
			"nationality": "Canada",
			"telephone" : telephone,
			"worksFor": siteMetadata.title
		},
		"foundingDate": "2016-10-21",
		"foundingLocation": "Victoria, British Columbia",
		"knowsAbout": "SEO, Local SEO, Web Development, Web Design, Search Engine Optimization, Internet Marketing, Websites, Website Maintenance, Web Services, SEO Company, SEO Agency",
		"knowsLanguage": "Gatsby, React, HTML5, CSS3, JavaScript ES6, PHP, XML, JSON",
		"legalName": "Peak Website Services",
		"location": {
			"@type": "Place",
			"name": "Victoria, British Columbia"
		},
		"logo": siteMetadata.image,
		"telephone": telephone,
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "48.423379",
			"longitude": "-123.35534",
			"PostalCode": "V8V 5A1"
		},
		"description": siteMetadata.description,
		"image": siteMetadata.image,
		"url": siteMetadata.siteUrl,
		"name": siteMetadata.title,
		"hasMap": {
			"@type": "Map",
			"url": "https://www.google.ca/maps/place/Peak+Websites/@48.423379,-123.3575287,17z/data=!3m1!4b1!4m5!3m4!1s0x548f0d5fc97ca0cf:0xe2e36cceda92621c!8m2!3d48.423379!4d-123.35534"
		},
        "sameAs": [twitterURL, facebookURL],
        "review": {
            "@type": "Review",
            "author": {
				"@type": "Person",
				"name": "Samira Noorali",
				"url": "https://www.samiranoorali.com/"
			},
			"itemReviewed": {
				"@type": "LocalBusiness",
				"name": siteMetadata.title,
                "image": siteMetadata.image,
				"telephone": telephone,
				"email": siteMetadata.contactEmail,
				"aggregateRating": {
					"@type": "AggregateRating",
					"itemReviewed": "Peak Websites",
					"reviewCount": "22",
					"ratingValue": "4.7"
				}
			},
			"reviewBody": "David at Peak websites not only gave me a beautiful website but was also tremendously patient with me as I tried to learn how to use the site and make changes to it.  Thanks so much! You're great!",
			
		}
	}

    return ( 
        <Helmet 
            encodeSpecialCharacters={true}
            htmlAttributes={{lang}}
            defaultTitle={site.siteMetadata.title}
            title={pageTitle}
            titleTemplate={site.siteMetadata.titleTemplate}
            link={ canonical ? [
                {
                    rel: "canonical",
                    href: canonical,
                }
                ] : [] }
            meta={[
                {
                    name: "description",
                    content: metaDescription,
                },
                {
                    property: "og:site_name",
                    content: site.siteMetadata.title
                },
                {
                    property: "og:title",
                    content: pageTitle + " | Peak Websites",
                },
                {
                    property: "og:description",
                    content: metaDescription,
                },
                {
                    property: "og:type",
                    content: `website`,
                },
                {
                    property: "og:url",
                    content: siteUrl
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: "twitter:creator",
                    content: site.siteMetadata.author,
                },
                {
                    name: "twitter:title",
                    content: pageTitle + " | Peak Websites",
                },
                {
                    name: "twitter:description",
                    content: metaDescription,
                },
            ]
            .concat(meta)
            .concat(
                metaImage && metaImage.localFile ? [
                    {
                        property: "og:image",
                        content: metaImage.localFile.url
                    },
                    {
                        property: "og:image:width",
                        content: metaImage.media_details.width,
                    },
                    {
                        property: "og:image:height",
                        content: metaImage.media_details.height,
                    },
                    {
                        name: "twitter:card",
                        content: "summary_large_image",
                    }
                ] : [
                    {
                        property: "og:image",
                        content: site.siteMetadata.image
                    },
                    {
                        property: "og:image:width",
                        content: 253,
                    },
                    {
                        property: "og:image:height",
                        content: 235,
                    },
                    {
                        name: "twitter:card",
                        content: "summary_large_image",
                    }
                ]
            )}
            defer={false} >
            <base href={site.siteMetadata.siteUrl} />
            <script type="application/ld+json">{JSON.stringify(schemaWebsite)}</script>
            <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>

        </Helmet>
    )
}

SEO.defaultProps = {
  lang: "en",
  meta: []
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.object
}

export default SEO