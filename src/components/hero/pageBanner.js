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
    console.log('pageBanner', props, bannerType);
    
    /* check if props is set, otherwise, assigne a null value to categories to avoid error */
    /* way to rewrite this?? */
    let categories = (!props) ? null : props.categories

    return (
        <div className={(bannerType === 'blog') ? `${banner.pageBanner} ${banner.blogPost}` : `${banner.pageBanner}`}>
            {/* <Img alt={''} fluid={props.ftrImg.source_url} /> */}

            {( bannerType === 'page' && 
            <div className={banner.headerContainer}>
                <h1>{ReactHtmlParser((props.title || pageTitle)) || ReactHtmlParser('&nbsp;')}</h1>
            </div>)}

            {/* if blog post, show different banner */}
            {( bannerType === 'blog' && 
            <div className={banner.blogHeaderContainer}>

                <FeatureBlogCard props={props} />

            </div>)}

        </div>
    )

}

export default PageBanner

PageBanner.propTypes = {
    pageTitle: PropTypes.string,
    bannerType: PropTypes.string.isRequired
}