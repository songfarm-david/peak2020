import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import QuotesCarousel from "../hero/quotesCarousel"
import NewsletterForm from "../form/newsletterForm"

import secondaryLogo from "../../images/logo/Logo_white.svg";
import facebook from "../../images/illustrations/png/Social Media Icons/fb.png"
// import instagram from "../images/illustrations/png/Social Media Icons/instagram.png"
import twitter from "../../images/illustrations/png/Social Media Icons/twitter.png"

import footerStyles from "./footer.module.scss"

const Footer = ({ path }) => {
  
  /* get footer links from CMS */
  const footerQuery = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    twitterLink
                    facebookUrl
                }
            }
            wordpressMenusMenusItems(wordpress_id: {eq: 179}) {
                id
                wordpress_id
                name
                items {
                    title
                    slug
                    url
                }
            }
        }
    `)
  
  const footerLinks = footerQuery.wordpressMenusMenusItems 
  const { twitterLink, facebookUrl } = footerQuery.site.siteMetadata
    
  return (
    <footer id={footerStyles.siteFooter}>
        <div className={footerStyles.innerContainer}>

            <QuotesCarousel />
            
            <div className={footerStyles.flexContainer}>
                
                {/* brand component */}
                <div className={footerStyles.footerItem}>
                    <img src={secondaryLogo} alt="Peak Websites logo" />
                    <p className="copyright">© Peak Websites {new Date().getFullYear()}</p>
                </div>
        
                {/* secondary nav */}
                <nav className={footerStyles.footerItem}>
                    <ul>
                        {footerLinks.items.map((link, idx) => (
                            <li key={idx}>
                                {( link.slug ) ? <Link to={"/"+link.slug}>{link.title}</Link> :
                                <a href={link.url} title={link.title}>{link.title}</a>}
                            </li>
                        ))}
                    </ul>
                </nav>
        
                {/* social component */}
                <div className={footerStyles.footerItem}>
                    <ul>
                        <li>
                            <a href={facebookUrl} title="Peak Websites Facebook Page">
                            <span><img src={facebook} alt={"Peak Websites Facebook Page"} /></span>
                            <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                        <a href={twitterLink} title="Peak Websites Twitter">
                            <span><img src={twitter} alt={"Peak Websites Twitter Page"} /></span>
                            <span>Twitter</span>
                        </a>
                        </li>
                    </ul>
                </div>
        
                {/* Newsletter */}
                <div className={footerStyles.footerItem}>
                    <p>Subscribe to the newsletter</p>
                    <div>
                        <NewsletterForm path={path} className="footerNewsletter" text="OK" />
                    </div>
                </div>
        
                {/* <div className={footerStyles.footerItem}>
                    <span>Contact</span>
                    <span><a href="tel:+17785879220">+1 778 587 9220</a></span>
                    <span><a href="mailto:sayhello@peakwebsites.ca">sayhello@peakwebsites.ca</a></span>
                </div> */}
            </div>

        </div>  
    </footer>
  )
}

export default Footer
