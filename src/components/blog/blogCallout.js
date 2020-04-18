import React from "react"
import { Link } from "gatsby"

import "../../styles/blog/blogStyles.scss"

const BlogCallout = () => (
  <article id="blogCallout" className="blog">
      <h3>Still reading?</h3>
      <p>Check out our <Link>blog</Link> to see what we're keeping up on</p>
      <Nav menuLinks={menuLinks} />
  </article>
)

export default BlogCallout