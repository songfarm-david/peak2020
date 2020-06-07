// const { createRemoteFileNode } = require("gatsby-source-filesystem")
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const  { createPage } = actions

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
                        path
                        status
                        title
                        date(formatString: "MMM Do, YYYY")
                        modified(formatString: "MMM Do, YYYY")
                        content
                        author {
                            name
                            wordpress_id
                            path
                        }
                        categories {
                            name
                            wordpress_id
                        }
                        featured_media {
                            source_url
                        }
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
                    wp_id: node.wordpress_id,
                    relPath: node.path,
                    title: node.title,
                    date: node.date,
                    modified: node.modified,
                    content: node.content,
                    author: node.author,
                    categories: node.categories,
                    ftrImg: node.featured_media
                }
            })
        }

    })
  
}

// exports.onCreateNode = async ({
//     node,
//     actions: { createNode },
//     store,
//     cache,
//     createNodeId,
// }) => {
//     // if is type "wordpress__POST" && has a featured image
//     if ( node.internal.type === "wordpress__POST" && 
//         node.featured_media !== null 
//     ) {

//         let fileNode = await createRemoteFileNode({
//             url: node.featured_media, // string that points to the URL of the image
//             parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//             createNode, // helper function in gatsby-node to generate the node
//             createNodeId, // helper function in gatsby-node to generate the node id
//             cache, // Gatsby's cache
//             store, // Gatsby's redux store
//         })

//         if (fileNode) {
//             node.wordpress__wp_media = fileNode.id
//         }

//     }
// }