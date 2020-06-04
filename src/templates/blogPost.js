/**
 * Blog template
 * Mar 2020
 */

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ( props ) => {
    
   const { title, excerpt, date, content } = props.pageContext

    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <div style={{ maxWidth: `80vw`, marginBottom: `1.45rem` }}>
              <div>
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                <p>{date}</p>
              </div>
              <div dangerouslySetInnerHTML={ { __html: content }}></div>
            </div>
        </Layout>
    )
}