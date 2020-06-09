import React from "react"
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Img from "gatsby-image"

import banner from "./pageBanner.module.scss"

import FeatureBlogCard from "../blog/featureBlogCard"

/**
 * Page Banner 
 * Appears on all pages (except home page)
 * 
 * @param {String} pageTitle a page title
 * @param {String} parent a parent page
 */
const PageBanner = ({ pageTitle, bannerType = "page", props = {} } ) => {
    
    console.log( 'pageBanner props', props );
    // console.log('data', data);
    
    /* check if props is set, otherwise, assigne a null value to categories to avoid error */
    /* way to rewrite this?? */
    // let categories = (!props) ? null : props.categories

    // const { categories  } = props.pageContext

    let isFeaturedMedia = false
    let featuredMedia = null

    if ( props.data && props.data.wordpressPost ) {
        isFeaturedMedia = true
        featuredMedia = props.data.wordpressPost.featured_media
    }
    // const { featured_media } = props.data.wordpressPost

    console.log(isFeaturedMedia, featuredMedia);
    

    return (
        <div className={(bannerType === 'blog') ? `${banner.pageBanner} ${banner.blogPost}` : `${banner.pageBanner}`}>
            {( isFeaturedMedia && 
            <Img className={banner.blogBanner} alt={featuredMedia.alt_text} fluid={featuredMedia.localFile.childImageSharp.fluid} />)}
            

            {( bannerType === 'page' && 
            <div className={banner.headerContainer}>
                <h1>{ReactHtmlParser((props.title || pageTitle)) || ReactHtmlParser('&nbsp;')}</h1>
            </div>)}

            {/* if blog post, show different banner */}
            {( bannerType === 'blog' && 
            <div className={banner.blogHeaderContainer}>

                <FeatureBlogCard props={props.pageContext} />

            </div>)}

        </div>
    )

}

export default PageBanner

PageBanner.propTypes = {
    pageTitle: PropTypes.string,
    bannerType: PropTypes.string.isRequired
}

export const query = graphql`
  query($imgPath: String!) {
    file(relativePath: { eq: $imgPath }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

/*
Gatsby Docs, gatsby-image fundamentals: https://www.gatsbyjs.org/docs/using-gatsby-image/
onCreateNode API: https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
Preprocessing external images: https://www.gatsbyjs.org/docs/preprocessing-external-images/#setup




*/