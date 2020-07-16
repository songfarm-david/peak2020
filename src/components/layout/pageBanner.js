import React from "react"
import PropTypes from 'prop-types';

import ReactHtmlParser from 'react-html-parser';

import "./pageBanner.scss"

import FeatureBlogCard from "../blog/blog-components/featureBlogCard"
import FeaturedImage from "../blog/blog-components/featuredImage"

/**
 * Page Banner 
 * Applies on both pages and blog posts
 * 
 * @param {String} bannerType either a 'page' or a 'blog' banner type
 * @param {String} title the title for the page banner
 */
const PageBanner = ({ bannerType = "page", title, slug, bannerImg, bannerData = {} }) => {
    // console.log('pageBanner bannerType, title, slug, bannerImg, bannerData', bannerType, title, slug, bannerImg, bannerData );
    
    return ( 
        <div className={( bannerType === 'page' ) ? `pageBanner ${slug}` : `blogPost ${slug}`}>

            {( bannerType === 'page' ) && 
                <div className={"headerContainer"}>
                    <h1 className={"pageHeader"}>{ReactHtmlParser(title)}</h1>
                </div>}

             {( bannerType === 'post' ) && 
                <>
                    <FeaturedImage featuredImage={bannerImg} isFeature={true} />
                    <div className={"blogHeaderContainer"}>
                        <FeatureBlogCard postData={(bannerData) ? bannerData : null} />
                    </div>
                </>}
        </div>
        
    )

}

export default PageBanner

PageBanner.propTypes = {
    bannerType: PropTypes.string,
    title: PropTypes.string.isRequired,
    bannerImg: PropTypes.object,
    bannerData: PropTypes.object
}