import React from "react"

const Comments = ({ postComments }) => {

    console.log(postComments);
    // make sure type === comment and status === approved

    // make sure to decodeHTMLEntities and strip tags, escape anything

    return (
        <div>
            {/* comment count */}

            {/* share component */}

            <h3>Leave a comment!</h3>
            <p>Your email address will not be published. Required fields are marked *.</p>
            <form 
                name="blog-comment"
                // action={path +"?comment_submitted"} 
                method="post">
                {/* <input type="hidden" name="post_id" value={postId} /> */}
                <label className="form-label" htmlFor="comment">Comment:
                    <textarea rows="14" name="comment" aria-label="comment"></textarea>
                </label>
                <label className="form-label" htmlFor="name">Name
                    <input type="input" name="name" aria-label="name" />
                </label>
                <label className="form-label" htmlFor="email">Email
                    <input type="email" name="email" aria-label="email" required />
                </label>
                <label className="form-label" htmlFor="website">Website
                    <input type="url" name="website" aria-label="website" required />
                </label>
                <div style={{border: "1px solid blue"}}>
                    <label htmlFor="permission">Save my name, email, and website in the browser for the next time I comment
                        <input type="checkbox" id="permission" name="permission" aria-label="permission"  /><span></span>
                    </label>
                </div>
                <button className="button primary-button">Send</button>
            </form>
        </div>
    )

}

export default Comments