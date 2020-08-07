import React from "react"
import PropTypes from 'prop-types';

import ReactHtmlParser from 'react-html-parser';

import "./pageBanner.scss"

import MetaCard from "../blog/blog-components/metaCard"
import FeaturedImage from "../blog/blog-components/featuredImage"
import Social from "../social"

/**
 * Page Banner 
 * Applies on both pages and blog posts
 * 
 * @param {String} bannerType either a 'page' or a 'blog' banner type
 * @param {String} title the title for the page banner
 */
const PageBanner = ({ 
    bannerType = "page", title = "", slug = "", bannerData = {} 
    }) => {
    // console.log('bannerType, title, slug, bannerData', bannerType, title, slug, bannerData );
    
    return ( 
        <header data-title={slug || title} 
            className={( bannerType === 'page' ) ? 
            `page_banner page_banner__page pageBanner ${slug}` 
            : `page_banner page_banner__post blogPost ${slug}`}>

            {( bannerType === 'page' ) && 
                <div className={"headerContainer"}>
                    <h1 className={"page_banner--header pageHeader"}>{ReactHtmlParser(title)}</h1>
                </div>}

             {( bannerType === 'post' ) && 
                <>
                    <FeaturedImage featuredImage={
                        (bannerData.featured_media) ? bannerData.featured_media : null} isFeature={true} />
                    <div className={"page_banner--post blogHeaderContainer"}>
                        <MetaCard postData={(bannerData) ? bannerData : null} />
                        <Social post={bannerData} isHeader={true} />
                    </div>
                </>}
        </header>
        
    )

}

export default PageBanner

PageBanner.propTypes = {
    bannerType: PropTypes.string,
    title: PropTypes.string.isRequired,
    bannerImg: PropTypes.object,
    bannerData: PropTypes.object
}