import React from "react"
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Img from "gatsby-image"

import banner from "./pageBanner.module.scss"
import FeatureBlogCard from "../blog/blog-components/featureBlogCard"

/**
 * Page Banner 
 * Appears on all pages (except home page)
 * 
 * @param {String} pageTitle a page title
 * @param {String} parent a parent page
 */
const PageBanner = ({ bannerType = "page", props } ) => {
    
    let isFeaturedMedia = false
    let featuredMedia = null
    let pageTitle = '&nbsp;'

    if (props.pageContext && props.pageContext.title) {
        pageTitle = props.pageContext.title
    } else if (props.title) {
        pageTitle = props.title
    }

    if ( props.data && props.data.wordpressPost ) {
        isFeaturedMedia = true
        featuredMedia = props.data.wordpressPost.featured_media
    }

    return (
        <div className={( bannerType !== 'blog' ) ? `${banner.pageBanner}` : `${banner.pageBanner} ${banner.blogPost}`}>

            {( isFeaturedMedia && 
            <Img className={banner.blogBanner} fluid={featuredMedia.localFile.childImageSharp.fluid} 
                alt={(featuredMedia.alt_text) ? featuredMedia.alt_text : ""}  
                />)}
            
            {( bannerType === 'page' && <div className={banner.headerContainer}>
                <h1>{ReactHtmlParser( ( pageTitle ) ) || ReactHtmlParser('&nbsp;')}</h1>
            </div>)}

            {( bannerType === 'blog' && <div className={banner.blogHeaderContainer}>
                <FeatureBlogCard props={props.pageContext} />
            </div>)}

        </div>
    )

}

export default PageBanner

PageBanner.propTypes = {
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