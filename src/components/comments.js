import React from "react"
import S from 'string'

import Social from "./social"

const Comments = ({ postData }) => {

    const { wordpressPost, allWordpressWpComments } = postData

    // console.log('comments component', wordpressPost, allWordpressWpComments);
    // make sure type === comment and status === approved

    // make sure to decodeHTMLEntities and strip tags, escape anything

    // if wordpress_parent === 0 // top level comment/class
    // otherwise it's a child comment, add a class && match to current node, and do that for any and all matches

    // const myFunction = (node) => {
    //     console.log('log dog', node);
    //     (postComments.edges.length === -1) ? "No comments yet." :
    //                 postComments.filter(
    //                     comment => comment.wordpress_parent
    //                 )
    //     return node
    // }

    return (
        <article>
            
            {/* comment count */}
            <header>
                {/* <h3 className="screen-reader-text">Article comment count</h3> */}
                {/* <b><p className="heading-4">{(postComments.totalCount === 1) ? 
                    postComments.totalCount + " Comment" : 
                    postComments.totalCount + " Comments"}</p></b> */}
            </header>

            {/* share component */}
            <Social post={wordpressPost} />

            <section>
                <h3>Leave a comment!</h3>
                <p>Your email address will not be published. Required fields are marked *.</p>
                <form 
                    name="blog-comment"
                    // action={path +"?comment_submitted"} 
                    method="post">
                    {/* <input type="hidden" name="post_id" value={postId} /> */}
                    <label className="form-label" htmlFor="comment">Comment
                        <textarea rows="14" name="comment" aria-label="comment" required></textarea>
                    </label>
                    <label className="form-label" htmlFor="name">Name
                        <input type="input" name="name" aria-label="name" />
                    </label>
                    <label className="form-label" htmlFor="email">Email
                        <input type="email" name="email" aria-label="email" required />
                    </label>
                    <label className="form-label" htmlFor="website">Website
                        <input type="url" name="website" aria-label="website" />
                    </label>
                    <div style={{border: "1px solid blue"}}>
                        <label htmlFor="permission">Save my name, email, and website in the browser for the next time I comment
                            <input type="checkbox" id="permission" name="permission" aria-label="permission"  /><span></span>
                        </label>
                    </div>
                    <button className="button primary-button">Send</button>
                </form>
            </section>

            <section>
                <h3>All comments for '{wordpressPost.title}'</h3>
                <article className="nestedComment">

                </article>
                { /* loop and output all the form stuff */ }
            </section>


        </article>
    )

}

export default Comments

// postComments.edges.map(({node}, idx) => (
//     (node.type === 'comment' && node.status === 'approved') ? 
//         (node.wordpress_parent !== 0) ? null : 
//             node.map(({node}, idx) => (
                
//             ))
//     (<article key={idx} style={{border: "2px solid brown"}}>
//         <span><b>{(node.author_name) ? node.author_name : "Unknown"}</b></span> &mdash;&nbsp;<time>{node.date}</time>
//         <p>{S(node.content).decodeHTMLEntities().stripTags().s}</p>
//         <a href={""}>Reply</a>
//     </article>) :
//     null
// )
// ).sort(myFunction)