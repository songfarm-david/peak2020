import React from "react"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout/layout"
import PageBanner from "../components/hero/pageBanner"
import Newsletter from "../components/hero/newsletter"
import ContactForm from "../components/layout/contactForm"

/**
* Blog template
* Mar 2020
*/
export default ( props ) => {
  console.log('blog template props?', props.pageContext);
  
  // do some kind of data validation here
  // write function that checks for presence of featured image, have fallback if not
  
    return (
        <Layout specialClass="blog">
    
            <PageBanner bannerType="blog" props={ props.pageContext } />
        
            <div className={"page-content blog-post"}>
                {ReactHtmlParser(props.pageContext.content)}
            </div>
        
            {/* display other blogs most likely to be attractive to user */}
            <Newsletter />
            <ContactForm isAddFields={false} />
      
        </Layout>
    )
    
}