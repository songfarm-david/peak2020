const path = require('path')

exports.createPages = async ({ graphql, actions }) =>  {

    const { createPage } = actions

    const pageTemplate = path.resolve('src/templates/pageTemplate.js')
    const blogTemplate = path.resolve('src/templates/blogPostTemplate.js')

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
                        status
                        path
                    }
                }
            }
        }
    `)

    if (result.errors) throw new Error(result.errors) 

    const { allWordpressPage, allWordpressPost } = result.data
        
    allWordpressPage.edges.forEach(({ node }) => {
        if (node.status === 'publish') {            
            createPage({
                path: "/"+node.path,
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
                    id: node.id
                }
            })
        }
    })
  
}