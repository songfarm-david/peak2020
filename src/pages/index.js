import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
    
    console.log(data)
 
     return (
         <Layout>
             <SEO title="Blog" />
             <h1>This is my homepage</h1>
             <p></p>
             <Image />
         </Layout>
     )
 }



