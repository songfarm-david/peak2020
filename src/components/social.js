import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import S from 'string'

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

const Social = ({ post, isHeader = false }) => {
    
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

    return (
        <article className="shareComponentContainer">
            {(isHeader) ? "" : <h3 className="heading-4">Share this post:</h3>}
            <EmailShareButton
                className={"shareIcon"} 
                url={rootUrl + post.path} 
                subject={cleanString(post.title)} 
                children={<EmailIcon size={32} round={true} />} 
                />
            <FacebookShareButton
                className={"shareIcon"} 
                url={rootUrl + post.path}
                quote={(post.excerpt) ? cleanString(post.excerpt) : ""}
                hashtag={site.siteMetadata.title}>
                <FacebookIcon size={32} round={true} />
                <FacebookShareCount url={rootUrl + post.path}>
                    {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                </FacebookShareCount>
            </FacebookShareButton>
            <LinkedinShareButton
                className={"shareIcon"}  
                url={rootUrl + post.path} 
                title={cleanString(post.title)} 
                summary={cleanString(post.excerpt)}
                source={site.siteMetadata.title} 
                children={<LinkedinIcon size={32} round={true} />} 
                />
            <RedditShareButton
                className={"shareIcon"}  
                url={rootUrl + post.path} 
                title={cleanString(post.title)}>
                <RedditIcon size={32} round={true} />
                <RedditShareCount url={rootUrl + post.path}>
                    {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                </RedditShareCount>
            </RedditShareButton>
            <TwitterShareButton
                className={"shareIcon"}  
                url={rootUrl + post.path} 
                via={site.siteMetadata.title}
                related={[site.siteMetadata.twitterUsername]}
                children={<TwitterIcon size={32} round={true} />} />
            <WhatsappShareButton
                className={"shareIcon"}  
                url={rootUrl + post.path} 
                title={cleanString(post.title)} 
                children={<WhatsappIcon size={32} round={true} />} />
        </article>
    )
}

export default Social