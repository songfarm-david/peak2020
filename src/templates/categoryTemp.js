import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import S from 'string'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"
import Newsletter from "../components/layout/newsletter"
import ContactFormCallout from "../components/forms/contactFormCallout"

export default ({ data, pageContext }) => {

    const { allWordpressPost } = data 

    const filteredPosts = allWordpressPost.edges.filter(({node}) => {
        return node.categories.some(({ slug }) => slug === pageContext.slug)
    })

    return (
        <Layout path={pageContext.url} layoutClass={"category"}>
            <SEO title={pageContext.name} description={(pageContext.description) ? pageContext.description : "Category page for "+pageContext.name} path={pageContext.url} />
            <Helmet title={S(pageContext.name).decodeHTMLEntities().s} />

            <PageBanner title={"Category: "+ pageContext.name} slug={"category-"+pageContext.slug} />
            <PageContent path={"category"}>
                <h2><i>{filteredPosts.length}</i> Posts in category: {pageContext.name}</h2>
                <ul>
                    {filteredPosts.map(({ node }, idx ) => (
                        <li key={idx}><Link to={node.path} title={S(node.title).decodeHTMLEntities().s}>{S(node.title).decodeHTMLEntities().s}</Link></li>
                    ))} 
                </ul>
            </PageContent>

            <Newsletter path={pageContext.url} />
            <ContactFormCallout path={pageContext.url} isAddFields={false} />
            
        </Layout>
    )

}

export const categoryQuery = graphql`
    query {
        allWordpressPost {
            edges {
                node {
                    id
                    title
                    path
                    categories {
                        slug
                    }
                }
            }
            totalCount
          }
    }
`