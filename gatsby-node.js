const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

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
                        path
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
                        path
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
            createPage({
                path: node.path,
                component: pageTemplate,
                context: {
                    title: node.title,
                    content: node.content,
                    slug: node.slug,
                }
            })
        }

    })

    allWordpressPost.edges.forEach(({ node }) => {

        if (node.status === 'publish') {
            createPage({
                path: node.path,
                component: blogTemplate,
                context: {
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

// exports.onCreateNode = ({ node, getNode }) => {
//     // console.log(node.internal.type)

//     if (node.internal.type === 'SitePage') {
//         console.log(node);
//         // node.path will return '/home'
//         if (node.context && node.context.parent !== null) {
//             // const fileNode = getNode(node.parent)
//             // console.log(`\n`, fileNode.relativePath)
//             console.log(node);
            
//         }
//     }

// }