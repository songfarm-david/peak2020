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
                        featured_media {
                            alt_text
                            localFile {
                                relativePath
                            }
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
                    }
                }
            }
        }
    `)

    if (result.errors) throw new Error(result.errors) 

    const { allWordpressPage, allWordpressPost } = result.data
        
    allWordpressPage.edges.forEach(({ node }) => {

        const { wordpress_id, path, ...nodeNoPath } = node

        if (node.status === 'publish') {            
            createPage({
                path: path,
                component: pageTemplate,
                context: {
                    pageId: wordpress_id,
                    ...nodeNoPath
                }
            })
        }

    })

    allWordpressPost.edges.forEach(({ node }) => {

        if (node.status === 'publish') {

            /* create two variables to separate out 'path' prop from node */
            const { wordpress_id, path, ...nodeNoPath } = node

            createPage({
                path: path,
                component: blogTemplate,
                context: {
                    postId: wordpress_id,
                    ...nodeNoPath
                }
            })

        }

    })
  
}

// fImg: (featured_media !== null) ? featured_media : '',

// imgPath: (featured_media !== null) ? featured_media : '',
