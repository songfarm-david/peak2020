import React from "react"
import ReactHtmlParser from 'react-html-parser';
import { formatTitle } from "../functions/helperFunctions"

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

  const { 
    title, 
    content 
  } = props.pageContext

  // do some kind of data validation here

  return (
    <Layout specialClass="blog">

      <PageBanner pageTitle={title} bgImage={''} />

      <div className={"page-content blog-post " + formatTitle(title)}>
        {ReactHtmlParser(content)}
      </div>

      <Newsletter />
      <ContactForm isAddFields={false} />

    </Layout>
  )
}