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


function SEO({ title, description, image, meta, lang, path }) {
    console.log('SEO component title, description, image, meta, path', title, description, image, meta, lang, path );
    
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    titleTemplate
                    description
                    author
                    image
                    url
                    facebookUrl
                    twitterLink
                    twitterUsername
                }
            }
        }
    `)

    // return null
    console.log('SEO title converted', S(title).decodeHTMLEntities().s);
    
    
    const pageTitle = S(title).decodeHTMLEntities().s || site.siteMetadata.title
    const metaDescription = S(description).stripTags().decodeHTMLEntities.s || site.siteMetadata.description
    const metaImage = image || site.siteMetadata.image
    const pUrl = path || site.siteMetadata.url
    const canonical = path || false
        
    console.log('seo.js canonical now', canonical);
        
    return ( 
        <Helmet 
            encodeSpecialCharacters={true}
            htmlAttributes={{ lang }}
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
                    content: pageTitle,
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
                    content: pUrl
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
                    content: pageTitle,
                },
                {
                    name: "twitter:description",
                    content: metaDescription,
                },
            ]
            .concat(meta)
            .concat(
                metaImage ? [
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
                    },
                ] : [
                    {
                    name: "twitter:card",
                    content: "summary",
                    },
                ]
            )}
            defer={false}
        />
    )
}

SEO.defaultProps = {
  lang: "en",
  meta: []
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.object
}

export default SEO
