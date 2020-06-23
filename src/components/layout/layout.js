import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { formatTitle } from "../../functions/helperFunctions"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ layoutClass, children, path }) => {
    // console.log('Layout component', layoutClass, children, path);
    
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)
  
    const replaceClass = (cls) => {
        // console.log('replaceClass cls', cls);
        
        if (cls.includes('blog-post')) {
            cls = cls.replace('blog-post', "")
            return 'blog-post ' + formatTitle(cls)
        }
        if (cls.includes('services')) {
            cls = cls.replace('services', "")
            return 'service-page ' + formatTitle(cls)
        }
        return formatTitle(cls)
    }

    return ( 
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main role="main" className={replaceClass(layoutClass)}>
                {children}
            </main>
            <Footer path={path} />
        </> 
    )
}

export default Layout
