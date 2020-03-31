import React from "react"
import { Link, graphql, withPrefix } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {

    const { allWordpressPost: posts } = data
 
    console.log(posts)

    return (
        <Layout>
            <SEO title="" description="" />
            {data.allWordpressPost.edges.map(({ node }) => (
                <div key={node.title}>
                    <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
                    <p>{node.date}</p>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <Link to={node.slug}>Read more</Link>
                    {showCategories(node)}
                </div>
            ))}
        </Layout>
    )
 }

/**
 * Exclude 'Portfolio' category from request
 */
export const queryAllPosts = graphql`
    query {
        allWordpressPost(sort: {fields: date, order: DESC}, 
            filter: {categories: {elemMatch: {name: {ne: "Portfolio"}}}}) {
            totalCount
            edges {
                node {
                    wordpress_id
                    date(formatString: "MMMM Do, YYYY")
                    title
                    slug
                    status
                    path
                    type
                    excerpt
                    content
                    categories {
                        name
                    }
                 }
            }
        }
    }
`
function showCategories(node) {

    if (node.categories.length) {
        let catsStr = '<span>'

        for (let index = 0; index < node.categories.length; index++) {
            if ( index == node.categories.length-1) {
                catsStr += node.categories[index].name
                continue
            }
            catsStr += node.categories[index].name + ', '
        }
        catsStr += '</span>'

    return <p dangerouslySetInnerHTML={{ __html: catsStr}}></p>
    }

}

function formatDate(date) {

}

