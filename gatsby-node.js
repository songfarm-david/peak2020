const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions

    const pageTemplate = path.resolve('src/templates/pageTemplate.js')
    const blogTemplate = path.resolve('src/templates/blogPostTemplate.js')

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
                            path
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

    if (result.errors) throw new Error(result.errors) 

    const { allWordpressPage, allWordpressPost } = result.data

    allWordpressPage.edges.forEach(({ node }) => {

        /* set a value for a parent element if applicable */
        const parentEl = (node.parent_element !== null) ? node.parent_element.path : null

        if (node.status === 'publish') {            
            createPage({
                path: node.path,
                component: pageTemplate,
                context: {
                    title: node.title,
                    content: node.content,
                    slug: node.slug,
                    parent: parentEl
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
                    content: node.content,
                    path: node.path
                }
            })
        }

    })

    
}