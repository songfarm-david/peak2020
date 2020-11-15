import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import S from 'string'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import Comments from "../components/comments"
import BlogCallout from "../components/blog/blogCallout"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/form/contactFormCallout"

import "../styles/posts.scss"

/**
* Blog template
* Mar 2020
*/
export default ({ data, location, pageContext }) => {
    
    const { 
        wordpress_id,
        path,
        title, 
        type, 
        featured_media, 
        excerpt, 
        content, 
        ...metaProps 
    } = data.wordpressPost

    const { wordpressPost, site } = data

    const description = S(excerpt).stripTags().decodeHTMLEntities().s
    const blogTitle = S(title).stripTags().decodeHTMLEntities().s
    const blogImage = (wordpressPost.featured_media) ? wordpressPost.featured_media.localFile.url : null

    console.log(data.wordpressPost.date, data.wordpressPost.modified);
    
    /* comments section here */
    const postComments = data.allWordpressWpComments

    // article schema here
    // Initial breadcrumb list
    const itemListElement = [
        {
            '@type': 'ListItem',
            item: {
                '@id': site.siteMetadata.siteUrl,
                name: 'Homepage',
            },
            position: 1,
        },
    ]

    const schemaArticle = {
        '@context': 'http://schema.org',
        '@type': 'Article',
        author: {
            '@type': 'Person',
            name: metaProps.author.name,
        },
        copyrightHolder: {
            '@type': 'Person',
            name: metaProps.author.name,
        },
        creator: {
            '@type': 'Person',
            name: metaProps.author.name,
        },
        publisher: {
            '@type': 'Organization',
            name: site.siteMetadata.title,
            logo: {
                '@type': 'ImageObject',
                url: site.siteMetadata.image,
            },
        },
        datePublished: metaProps.date,
        dateModified: metaProps.modified,
        description: description,
        headline: blogTitle,
        inLanguage: "English",
        url: `${site.siteMetadata.siteUrl}${path}`,
        name: blogTitle,
        image: {
            '@type': 'ImageObject',
            url: blogImage,
        },
        mainEntityOfPage: `${site.siteMetadata.siteUrl}${path}`,
    }

    // Push current blogpost into breadcrumb list
    itemListElement.push({
        '@type': 'ListItem',
        item: {
            '@id': `${site.siteMetadata.siteUrl}${path}`,
            name: blogTitle,
        },
        position: 2,
    })

    const breadcrumb = {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        description: 'Breadcrumbs list',
        name: 'Breadcrumbs',
        itemListElement,
    }
    
    return (
        <Layout path={location.pathname} layoutClass={"blog_post " + title}> 
            <SEO title={title} description={excerpt} image={featured_media} path={location.href} />

            <Helmet title={S(title).decodeHTMLEntities().s}>
                <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
            </Helmet>

            <PageBanner bannerType={"post"} bannerData={wordpressPost} title={title} />
            
            <PageContent type={type} content={content} />

            {/* <Comments postData={data} /> */}
            <BlogCallout postId={wordpress_id} />

            <Newsletter path={location.pathname} />
            <ContactFormCallout path={location.pathname} isAddFields={false} />

        </Layout>
    )
    
}

// (formatString: "MMM Do, YYYY")

export const query = graphql`
    query($id: String!, $wordpress_id: Int!) {
        wordpressPost(id: {eq: $id}) {
            wordpress_id
            path
            status
            type
            sticky
            title
            excerpt
            date
            modified
            content
            author {
                name
                wordpress_id
                path
            }
            categories {
                name
                wordpress_id
                path
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
        allWordpressWpComments(filter: {post: {eq: $wordpress_id}}) {
            totalCount
            edges {
                node {
                    wordpress_id
                    wordpress_parent
                    type
                    status
                    post
                    path
                    author_name
                    author_url
                    date(formatString: "MMM Do, YYYY")
                    content
                }
            }
        }
        site {
            siteMetadata {
                siteUrl
                title
                image
            }
        }
    }    
`