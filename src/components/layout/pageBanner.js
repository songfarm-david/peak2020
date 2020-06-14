import React from "react"
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Img from "gatsby-image"
import { graphql } from 'gatsby'

import banner from "./pageBanner.module.scss"
import FeatureBlogCard from "../blog/blog-components/featureBlogCard"

/**
 * Page Banner 
 * Applies on both pages and blog posts
 * 
 * @param {String} bannerType either a 'page' or a 'blog' banner type
 * @param {String} title the title for the page banner
 */
const PageBanner = (props) => {
    console.log('pageBanner props:', props);

    const { bannerType, title, isFeaturedMedia = false } = props || {}
    
    // let isFeaturedMedia = false
    // let featuredMedia = null
    // let pageTitle = ( title ) ? ReactHtmlParser(title) : '&nbsp;'   

    // if ( props.data && props.data.wordpressPost ) {
    //     isFeaturedMedia = true
    //     featuredMedia = props.data.wordpressPost.featured_media
    // }

    return ( 
        <div className={
            ( bannerType === 'page' ) ? 
            `${banner.pageBanner}` : `${banner.blogPost}`}>

            {( bannerType === 'page' ) && 
                <div className={banner.headerContainer}>
                    <h1>{ReactHtmlParser(title)}</h1>
                </div>}

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

// export const query = graphql`
//   query($imgPath: String!) {
//     file(relativePath: { eq: $imgPath }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

 //     {( isFeaturedMedia && <Img className={banner.blogBanner} 
        //         fluid={
        //             (featuredMedia && featuredMedia.localFile) ? featuredMedia.localFile.childImageSharp.fluid : null
        //         } 
        //         alt={
        //             (featuredMedia && featuredMedia.alt_text) ? featuredMedia.alt_text : ""
        //         }  
        //         />)
        //     }