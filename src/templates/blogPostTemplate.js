/**
 * Blog template
 * Mar 2020
 */

import React from "react"

import Layout from "../components/layout/layout"

export default ( props ) => {
    
   const { title, date, content } = props.pageContext

    return (
        <Layout
          specialClass="blog">

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