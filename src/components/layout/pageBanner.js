import React from "react"
import PropTypes from 'prop-types';

import ReactHtmlParser from 'react-html-parser';

import "./pageBanner.scss"

import MetaCard from "../blog/blog-components/metaCard"
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
        <header className={( bannerType === 'page' ) ? `pageBanner ${slug}` : `blogPost ${slug}`} data-title={slug}>

            {( bannerType === 'page' ) && 
                <div className={"headerContainer"}>
                    <h1 className={"pageHeader"}>{ReactHtmlParser(title)}</h1>
                </div>}

             {( bannerType === 'post' ) && 
                <>
                    <FeaturedImage featuredImage={bannerImg} isFeature={true} />
                    <div className={"blogHeaderContainer"}>
                        <MetaCard postData={(bannerData) ? bannerData : null} />
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