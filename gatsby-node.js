const { createRemoteFileNode } = require("gatsby-source-filesystem")
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
                            alt_text
                            localFile {
                                relativePath
                            }
                        }
                        _links {
                            wp_featuredmedia {
                                href
                            }
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
        const parentEl = ( node.parent_element !== null ) ? node.parent_element.path : null

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

        // if (node.wordpress_id === 1785) {
        //     console.log('log post node', node);
        // }

        if (node.status === 'publish') {
            console.log(node.featured_media.localFile.relativePath);

            /* create two variables to separate out 'path' prop from node */
            const { wordpress_id, path, featured_media, ...nodeNoPath } = node

            createPage({
                path: node.path,
                component: blogTemplate,
                context: {
                    postId: wordpress_id,
                    relPath: path,
                    imgPath: featured_media.localFile.relativePath,
                    ...nodeNoPath
                }
            })

        }

    })
  
}

// exports.createSchemaCustomization = ({ actions }) => {
//     const { createTypes } = actions
//     createTypes(`
//       type wordpressPost implements Node {
//         featuredImg: File @link(from: "featured_media___NODE")
//       }
//     `)
//   }

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

//         let imgUrl

//         if (node.wordpress_id === 1785) {
            
//             // console.log('onCreateNode', node);
//             // this only outputs a "featured_media___NODE: 'e18b793d-5a19-5ba7-a711-8ce4986f70f5'"

//             let ftrImgLink = node._links.wp_featuredmedia

//             for (const value of ftrImgLink) {
//                 imgUrl = (value.href) ? value.href : null
//             }
//             console.log('imgUrl?', imgUrl);

//         }

//         // let fileNode = await createRemoteFileNode({
//         //     url: imgUrl, // string that points to the URL of the image
//         //     parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//         //     createNode, // helper function in gatsby-node to generate the node
//         //     createNodeId, // helper function in gatsby-node to generate the node id
//         //     cache, // Gatsby's cache
//         //     store, // Gatsby's redux store
//         // })

//         // if (fileNode) {
//         //     node.featured_media___NODE = fileNode.id
//         // }

//     }
// }