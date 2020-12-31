const path = require('path')

exports.createPages = async ({ graphql, actions }) =>  {

    const { createPage } = actions

    const pageTemplate = path.resolve('src/templates/pageTemplate.js')
    const blogTemplate = path.resolve('src/templates/blogPostTemplate.js')
    const categoryTemplate = path.resolve('src/templates/categoryTemp.js')

    const result = await graphql(`
        query {
            allWordpressPage {
                edges {
                    node {
                        id
                        status
                        path
                    }
                }
            }
            allWordpressPost {
                edges {
                    node {
                        id
                        wordpress_id
                        status
                        path
                        categories {
                            slug
                        }
                    }
                }
            }
            allWordpressCategory {
                edges {
                    node {
                        id
                        path
                        slug
                        name
                        description
                    }
                }
            }
        }
    `)

    if (result.errors) throw new Error(result.errors) 

    const { allWordpressPage, allWordpressPost, allWordpressCategory } = result.data
        
    allWordpressPage.edges.forEach(({ node }) => {
        if (node.status === 'publish') {            
            createPage({
                path: node.path,
                component: pageTemplate,
                context: {
                    id: node.id
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
                    id: node.id,
                    wordpress_id: node.wordpress_id
                }
            })
        }
    })

    // todo: double check 'context' prop contains only necessary stuff
    allWordpressCategory.edges.forEach(({ node }) => {
        if (node.slug === 'portfolio') return
        createPage({
            path: node.path,
            component: categoryTemplate,
            context: {
                id: node.id,
                slug: node.slug,
                name: node.name,
                description: node.description,
                url: node.path
            }
        })
    })
  
}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        node: {
            fs: "empty",
        },
    })
}