import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import S from 'string'

import "../styles/blog/social.scss"

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    FacebookShareCount,
    RedditShareCount,
} from "react-share";

import {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon,
    RedditIcon,
    EmailIcon,
  } from 'react-share';

  /**
   * Social sharing component
   * July 26, 2020
   */

const Social = ({ post, isHeader = false, visible = true }) => {
    
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl
                    title
                    description
                    author
                    image
                    facebookUrl
                    twitterLink
                    twitterUsername
                }
            }
        }
    `)

    const rootUrl = site.siteMetadata.siteUrl

    const cleanString = (uncleanStr) => (S(uncleanStr).decodeHTMLEntities().stripTags().s)

    // const containerStyles = {
    //     padding: '1.5rem 0 0'
    // }
    const iconStyles = { padding: "0 .25rem"}

    return (
        <article className="shareComponentContainer"  >
            {(isHeader) ? "" : <h3 className="heading-4">Share this post:</h3>}
            <EmailShareButton
                style={iconStyles} 
                url={rootUrl + post.path} 
                subject={cleanString(post.title)} 
                children={<EmailIcon size={32} round={true} bgStyle={{fill: "#27688E"}} />} 
                />
            <FacebookShareButton
                style={iconStyles} 
                url={rootUrl + post.path}
                hashtag={site.siteMetadata.title}>
                <FacebookIcon size={32} round={true} bgStyle={{fill: "#DEC1FF"}} />
                <FacebookShareCount url={rootUrl + post.path}>
                    {shareCount => <div className="myShareCountWrapper">{shareCount}</div>}
                </FacebookShareCount>
            </FacebookShareButton>
            <LinkedinShareButton
                style={iconStyles}  
                url={rootUrl + post.path} 
                title={cleanString(post.title)} 
                summary={cleanString(post.excerpt)}
                source={site.siteMetadata.title} 
                children={<LinkedinIcon size={32} round={true} bgStyle={{fill: "#E5AD3E"}} />} 
                />
            <RedditShareButton
                style={iconStyles}  
                url={rootUrl + post.path} 
                title={cleanString(post.title)}>
                <RedditIcon size={32} round={true} bgStyle={{fill: "#6BE8AA"}} />
                <RedditShareCount url={rootUrl + post.path}>
                    {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                </RedditShareCount>
            </RedditShareButton>
            <TwitterShareButton
                style={iconStyles}  
                url={rootUrl + post.path} 
                via={site.siteMetadata.title}
                related={[site.siteMetadata.twitterUsername]}
                children={<TwitterIcon size={32} round={true} bgStyle={{fill: "#49C5DE"}} />} />
            <WhatsappShareButton
                style={iconStyles}  
                url={rootUrl + post.path} 
                title={cleanString(post.title)} 
                children={<WhatsappIcon size={32} round={true} bgStyle={{fill: "#66BA86"}} />} />
        </article>
    )
}

export default Social