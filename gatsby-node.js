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

    // wordpress_id: 2517,
    // title: 'Web Services'

    const { createPage } = actions

    const pageTemplate = path.resolve('src/templates/page.js')
    const blogTemplate = path.resolve('src/templates/blogPost.js')

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
                    parent_element {
                        wordpress_id
                        title
                      }
                  }
                }
              }
            allWordpressPost {
                edges {
                    node {
                        wordpress_id
                        slug
                        status
                        title
                        date
                        excerpt
                    }
                }
            }
        }
    `)

    if (result.errors) {
        throw new Error(result.errors)
    }

    const { allWordpressPage, allWordpressPost } = result.data

    allWordpressPage.edges.forEach(({ node }) => {

        if (node.status === 'publish') {
            console.log(node.title, node.slug);
            
            createPage({
                path: node.slug,
                component: pageTemplate,
                context: {
                    ...node
                }
            })
        }

    })

    allWordpressPost.edges.forEach(({ node }) => {

        if (node.status === 'publish') {
            createPage({
                path: node.slug,
                component: blogTemplate,
                context: {
                    wp_id: node.wordpress_id,
                    slug: node.slug,
                    title: node.title,
                    date: node.date,
                    content: node.content
                }
            })
        }

    })

    
}

// exports.onCreatePage = ({ page }) => {
//     console.log(page);
// }

exports.onCreateNode = ({ node, getNode }) => {
    // console.log(node.internal.type)

    if (node.internal.type === 'SitePage') {
        console.log(node);
        // node.path will return '/home'
        if (node.context && node.context.parent !== null) {
            // const fileNode = getNode(node.parent)
            // console.log(`\n`, fileNode.relativePath)
            console.log(node);
            
        }
    }

}