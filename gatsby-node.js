/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    /*     
    0. import template     
    1. make the request
    2. JS the request to parse from array
    3. create pages
*/

    const { createPage } = actions

    const pageTemplate = path.resolve('src/templates/page.js')

    const result = await graphql(`
        query {
            allWordpressPage {
                edges {
                  node {
                    wordpress_id
                    slug
                    status
                    title
                    excerpt
                    content
                  }
                }
              }
        }
    `)

    if (result.errors) {
        throw new Error(result.errors)
    }

    const { allWordpressPage } = result.data

    allWordpressPage.edges.forEach(({ node }) => {

        if (node.status === 'publish') {
            createPage({
                path: node.slug,
                component: pageTemplate,
                context: {
                    wp_id: node.wordpress_id,
                    slug: node.slug,
                    title: node.title,
                    content: node.content
                }
            })
        }

    })
    
}