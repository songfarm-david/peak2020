import React from "react"
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import banner from "./pageBanner.module.scss"

import FeatureBlogCard from "../blog/blog-components/featureBlogCard"
import FeaturedImage from "../blog/blog-components/featuredImage"

/**
 * Page Banner 
 * Applies on both pages and blog posts
 * 
 * @param {String} bannerType either a 'page' or a 'blog' banner type
 * @param {String} title the title for the page banner
 */
const PageBanner = (props) => {

    const { 
        bannerType, 
        title, 
        postData,
        bannerImg
    } = props || {}

    return ( 
        <div className={( bannerType === 'page' ) ? 
            `${banner.pageBanner}` : `${banner.blogPost}`}>

            {( bannerType === 'page' ) && 
                <div className={banner.headerContainer}>
                    <h1 className={banner.pageHeader}>{ReactHtmlParser(title)}</h1>
                </div>}

             {( bannerType === 'blog' ) && 
                <>
                    <FeaturedImage featuredImage={bannerImg} isFeature={true} />
                    <div className={banner.blogHeaderContainer}>
                        <FeatureBlogCard postData={postData} />
                    </div>
                </>}

        </div>
    )

}

export default PageBanner

PageBanner.propTypes = {
    bannerType: PropTypes.string.isRequired
}