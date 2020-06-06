import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import QuotesCarousel from "../hero/quotesCarousel"
import NewsletterForm from "../hero/newsletterForm"

import secondaryLogo from "../../images/logo/Logo_white.svg";
import facebook from "../../images/illustrations/png/Social Media Icons/fb.png"
// import instagram from "../images/illustrations/png/Social Media Icons/instagram.png"
import twitter from "../../images/illustrations/png/Social Media Icons/twitter.png"

import "./footer.scss"

const Footer = () => {
  
  /* get footer links from CMS */
  const footerLinks = useStaticQuery(
    graphql`
      query {
        allWordpressMenusMenusItems(filter: {wordpress_id: {eq: 179}}) {
          edges {
            node {
              name
              wordpress_id
              items {
                title
                url
                slug
              }
            }
          }
        }
      }
    `)
  
  const fLinks = footerLinks.allWordpressMenusMenusItems.edges[0].node 
  // console.log(fLinks.items, typeof fLinks);
    
  return (
    <footer id="siteFooter">
      <div>
        <QuotesCarousel />
        
        {/* brand component */}
        <div className="footer-item">
          <img src={secondaryLogo} alt={""} />
          <p className="copyright">© Peak Websites {new Date().getFullYear()}</p>
        </div>

        {/* secondary nav */}
        <nav className="footer-item">
          <ul>
            {fLinks.items.map( (item, idx) => (
              <li key={idx}>
                {( item.slug ) ? 
                  <Link to={item.slug}>{item.title}</Link> :
                  <a href={item.url} title={item.title}>{item.title}</a>}
              </li>
            ))}
          </ul>
        </nav>

        {/* social component */}
        <div className="footer-item">
          <ul>
            <li>
                <a href="" title="Peak Websites Facebook Page">
                  <span><img src={facebook} alt={""} /></span>
                  <span>Facebook</span>
                </a>
            </li>
            <li>
              <a href="" title="Peak Websites Twitter">
                <span><img src={twitter} alt={""} /></span>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-item">
          <p>Subscribe to the newsletter</p>
          <div id="footerNewsletter" className="newsletter">
            {/* <input type="email" placeholder="Email Address"/>
            <button className="button small-button footer-text">OK</button> */}
            <NewsletterForm text="OK" />
          </div>
        </div>

        <div className="footer-item">
          <span>Contact</span>
          <span><a href="tel:+17785879220">+1 778 587 9220</a></span>
          <span><a href="mailto:david@peakwebsites.ca">david@peakwebsites.ca</a></span>
        </div>

      </div>
      
      

    </footer>
  )
}

export default Footer
