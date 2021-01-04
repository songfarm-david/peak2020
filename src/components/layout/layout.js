import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { formatTitle } from "../../functions/helperFunctions"
import Header from "./header"
import Footer from "./footer"
import TopBar from "../hero/topBar"

/**NOTE: should use propTypes checking on these data */
const Layout = ({ layoutClass = "", children, path }) => {
    // console.log(path)
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
        if (cls.includes('blog_post')) {
            cls = cls.replace('blog_post', "")
            return 'blog_post ' + formatTitle(cls)
        }
        if (cls.includes('services')) {
            cls = cls.replace('services', "")
            return 'service-page ' + formatTitle(cls)
        }
        return formatTitle(cls)
    }

    return ( 
        <>
            {/* {path !== '/services/seo-services/local-seo-packages/' && <TopBar />} */}
            <Header siteTitle={data.site.siteMetadata.title} 
            // styleClass={path !== '/services/seo-services/local-seo-packages/' ? 'hasTopbar' : ''}
            />
            <main role="main" className={replaceClass(layoutClass)}>
                {children}
            </main>
            <Footer path={path} />
        </> 
    )
}

export default Layout
