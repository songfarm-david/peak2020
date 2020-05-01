import React from "react"
import { Link } from "gatsby"

import "../../styles/blog/blogStyles.scss"

const BlogCallout = () => (
  <article id="blogCallout" className="blog">
      <div>
        <h3>Still reading?</h3>
        <p>Check out our <Link to="/blog">blog</Link> to see what we're keeping up on</p>
      </div>
  </article>
)

export default BlogCallout